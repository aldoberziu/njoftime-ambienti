const Feeds = require("../models/feeds");
const Plans = require("../models/plans");
const ApiFeatures = require("../utils/apiFeatures");
const { categories } = require("../constants");

exports.create = async (req, res, next) => {
  const standardPlan = await Plans.findById("1");
  req.body.createdAt = Date.now().valueOf();
  req.body.expiresAt = req.body.createdAt + standardPlan.duration;

  const newFeed = await Feeds.create(req.body);

  res.status(201).json({
    status: "success",
    data: newFeed,
  });
  next();
};
exports.one = async (req, res, next) => {
  const feed = await Feeds.findById(req.params.id);

  if (!feed) {
    res.status(404).json({
      status: "success",
      message: "Document not found!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: feed,
    });
  }
  next();
};
exports.searchTest = async (req, res, next) => {
  const search = req.params.searchValue;
  const searchElements = search.split(" ");
  const regexPatterns = searchElements.map((el) => new RegExp(el, "i"));
  let searchedFeeds = [];
  for (let i = 0; i < regexPatterns.length; i++) {
    const feed = await Feeds.find({
      $or: [
        { floor: { $regex: regexPatterns[i] } },
        { structure: { $regex: regexPatterns[i] } },
      ],
    });
    if (feed.length !== 0) {
      searchedFeeds.push(feed[0]);
    }
  }

  res.status(200).json({
    status: "success",
    data: searchedFeeds,
  });
  next();
};
exports.all = async (req, res, next) => {
  const filters = new ApiFeatures(Feeds.find(), req.query).filter();

  const feeds = await filters.query;
  // console.log(feeds);

  res.status(200).json({
    status: "success",
    data: feeds,
  });
  next();
};
exports.delete = async (req, res, next) => {
  if (req.params.id) {
    const feed = await Feeds.findByIdAndDelete(req.params.id);

    if (!feed) {
      res.status(404).json({
        status: "fail",
        message: `No feed found with id: ${req.params.id}! Please try another one.`,
      });
    } else {
      res.status(204).json({
        status: "success",
        message: "Document just got deleted successfully!",
      });
    }
  }
  next();
};
exports.updatePlan = async (req, res, next) => {
  const modifiedAt = Date.now().valueOf();
  const newPlan = await Plans.findById(req.body.activePlan);
  const expiresAt = modifiedAt + newPlan.duration;
  const updatedFeed = await Feeds.findByIdAndUpdate(
    req.params.id,
    {
      activePlan: req.body.activePlan,
      expiresAt: expiresAt,
      modifiedAt: modifiedAt,
    },
    {
      new: true,
      runValidators: true,
      returnDocument: "after",
    }
  );
  res.status(200).json({
    status: "success",
    data: updatedFeed,
  });
  next();
};
