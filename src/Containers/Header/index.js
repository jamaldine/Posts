import React from "react";

import ButtonAppBar from "../../Widgets/API_components/buttonAppBar";
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ButtonAppBar {...this.props} />;
  }
}

export default Header;
