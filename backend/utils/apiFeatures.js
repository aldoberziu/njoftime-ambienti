class ApiFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;//ajo te endpointi
    }
    filter(){
        const queryObj = { ...this.queryString};
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    // search(){
    //     const searchElements = this.queryString.split(" ");
    //     searchElements.$or = [
    //         { floor: { $regex: searchElements.join(".*") } },
    //         { structure: { $regex: searchElements.join(".*") } },
    //       ];
    //     console.log(searchElements)
    // }
}
module.exports = ApiFeatures;