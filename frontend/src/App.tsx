import "./App.module.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { PreBuiltUIList, SuperTokensConfig, ComponentWrapper } from "./config";
import Feeds from "./components/Feeds/index";
import DetailedFeed from "./DetailedFeed";
import Plans from "./components/Plans";
import Slider from "./components/oldSlider";

SuperTokens.init(SuperTokensConfig);

function App() {
  return (
    <SuperTokensWrapper>
      <ComponentWrapper>
        <div className="App app-container">
          <Router>
            <div className="fill">
              <Routes>
                {/* This shows the login UI on "/auth" route */}
                {getSuperTokensRoutesForReactRouterDom(
                  require("react-router-dom"),
                  PreBuiltUIList
                )}
                <Route
                  path="/"
                  element={
                    // <SessionAuth>
                    <Home />
                    // </SessionAuth>
                  }
                />
                <Route path="/feeds" element={<Feeds />} />
                <Route path="/slider" element={<Slider />} />
                <Route path="/feeds/:id/plans" element={<Plans />} />
                <Route path="/feeds/:id" element={<DetailedFeed />} />
              </Routes>
            </div>
          </Router>
        </div>
      </ComponentWrapper>
    </SuperTokensWrapper>
  );
}

export default App;
