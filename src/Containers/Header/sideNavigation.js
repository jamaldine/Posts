import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from './sideNavItems'
const SideNavigation = (props) => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "black",
        maxWidth: "220px",
      }}
    >
      <SideNavItems {...props} />
    </SideNav>
  );
};

export default SideNavigation;
