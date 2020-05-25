import React from "react";

import Chart from "../../Components/chart";
class Statistic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("statistic");
    return <Chart />;
  }
}

export default Statistic;
