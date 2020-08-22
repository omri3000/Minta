import React from "react";
import "./App.css";
import { SideNav } from "./components/side-nav/SideNav";
import { Main } from "./components/main-content/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions/actions";

function App() {
  const dispatch = useDispatch();

  /*eslint-disable */
  useEffect(() => {
    dispatch(actions.fetchCampaigns());
  }, []);
  /*eslint-enable */

  return (
    <div className="App">
      <Router>
        <div className="SideNav">
          <SideNav />
        </div>
        <div className="Main">
          <Switch>
            <Route path="/:campaign" children={<Main />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
