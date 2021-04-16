import React, { Component,Fragment } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Doughnut from "./Doughnut";
import data from "../data";
import Chart from "chart.js";
import Sidebar from "react-sidebar";
import SideBarContent from "./Sidebar"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      feeds:data()
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
    var element = document.getElementById("main-charts")
    if(element.style.marginLeft == "200px"){
      element.style.marginLeft = "0px";
    }
    else{
      element.style.marginLeft = "200px";
    }
  }

  componentDidMount() {
    Chart.defaults.global.defaultFontColor = "#FFFFFF6F";
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
      this.setState({
        feeds: data(),
      });
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
     
      <div id="main-charts">
        <div className="main chart-wrapper">
          
          <LineChart
            data={this.state.feeds[0].data}
            title={this.state.feeds[0].title}
            color="#ffa600"
          />
        </div>
        <div className="sub-wrapper">
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[1].data}
              title={this.state.feeds[1].title}
              color="#955196"
            />
          </div>

          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[3].data}
              title={this.state.feeds[3].title}
              color="#ff6e54"
            />
          </div>
          <div className="sub chart-wrapper doughnut">
            <Doughnut
              data={this.state.feeds[2].data}
              title={this.state.feeds[2].title}
              colors={[
                "#003f5c",
                "#444e86",
                "#955196",
                "#dd5182",
                "#ff6e54",
                "#ffa600",
              ]}
            />
          </div>
        </div>
        </div>
      </div>
      </Fragment>
    );
    
  }
}

export default App;
