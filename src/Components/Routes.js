import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Explore from "../Routes/Explore";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LoggedOutRoutes = () => <Route exact path="/" component={Auth} />;

const AppRouter = ({ isLoggedIn }) => (
  <Switch> {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />} </Switch>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
