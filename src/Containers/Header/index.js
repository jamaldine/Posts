import React, { Fragment } from "react";
import SideNavigation from "./sideNavigation";
import ButtonAppBar from "../../Widgets/API_components/buttonAppBar";
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SideNavigation
          {...this.props}
          onHideNav={() => this.props.setShowNav(false)}
          onShowNav={() => this.props.setShowNav(true)}
        />
        <ButtonAppBar {...this.props} openNavBar={() => this.props.setShowNav(true)} />
      </Fragment>
    );
  }
}

export default Header;
