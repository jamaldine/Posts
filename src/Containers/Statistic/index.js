import React from "react";
import { Redirect } from 'react-router-dom'
import Chart from "../../Components/chart";
class Statistic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.home) {
      return <Redirect to="/" />;
    }
    return <Chart />;
  }
}

export default Statistic;
