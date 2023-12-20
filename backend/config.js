const Passwordless = require("supertokens-node/recipe/passwordless")
const Session = require("supertokens-node/recipe/session")
const Dashboard = require("supertokens-node/recipe/dashboard")
const UserRoles = require("supertokens-node/recipe/userroles")

function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 3001
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`
  return apiUrl
}

function getWebsiteDomain() {
  const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000
  const websiteUrl =
    process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`
  return websiteUrl
}

const SuperTokensConfig = {
  framework: "express",
  supertokens: {
    // These are the connection details of the app you created on supertokens.com
    connectionURI:
      "https://st-dev-29e5d5e0-856a-11ee-8cf3-5d664e22d3f6.aws.supertokens.io",
    apiKey: "gooUzpvPLS79=rdHOGRZal-Ctn"
  },
  appInfo: {
    appName: "SuperTokens Demo App",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain()
  },
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    Passwordless.init({
      contactMethod: "EMAIL_OR_PHONE",
      flowType: "USER_INPUT_CODE_AND_MAGIC_LINK"
    }),
    Session.init(),
    Dashboard.init({
      admins: ["berziu2004@gmail.com"]
    }),
    UserRoles.init()
  ]
}

module.exports = {SuperTokensConfig, getWebsiteDomain};