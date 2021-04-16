import React, { Component,Fragment } from "react";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    
  }

  render() {
    return (
      <Fragment>
      <div className="app">   
        
        <div id="main-charts"></div>
      </div>
      </Fragment>
    );
    
  }
}

export default About;
