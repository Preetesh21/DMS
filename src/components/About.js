import React, { Component,Fragment } from "react";

import Sidebar from "react-sidebar";
import SideBarContent from "./Sidebar"
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
    var element = document.getElementById("main-charts")
    if(element.style.marginLeft === "200px"){
      element.style.marginLeft = "0px";
    }
    else{
      element.style.marginLeft = "200px";
    }
  }

  render() {
    return (
      <Fragment>
      <div className="app">   
        <Sidebar
        sidebar={<SideBarContent/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "LightGray", width:"200px" } }}>
          <div id="mySidenav container">
            <button  onClick={() => this.onSetSidebarOpen(true)}  style={{fontSize:"30px", cursor:"pointer"}}>&#9776;</button>
          </div>
        </Sidebar>
        <div id="main-charts"></div>
      </div>
      </Fragment>
    );
    
  }
}

export default About;
