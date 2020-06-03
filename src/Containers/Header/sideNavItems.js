import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import ExploreOffIcon from "@material-ui/icons/ExploreOff";
const SideNavItems = (props) => {
  return (
    <React.Fragment>
      <Link to="/statistic" onClick={props.onHideNav}>
        {" "}
        <HomeIcon />
        Statistic
      </Link>
      <Link to="/posts" onClick={props.onHideNav}>
        <NetworkCellIcon />
        Posts
      </Link>
      <Link to="/map" onClick={props.onHideNav}>
        <ExploreOffIcon />
        Map
      </Link>
    </React.Fragment>
  );
};

export default SideNavItems;
