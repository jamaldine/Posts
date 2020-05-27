import React from "react";
import { Redirect } from 'react-router-dom'
class Map extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {}
  }
      
  render() {
    console.log(this.props.home)

    if (this.props.home) {
      console.log('hello', this.props.home)
      return <Redirect to="/" />;
    }
    return (
      <div>MAP</div>
    );
  }
}

export default Map;
