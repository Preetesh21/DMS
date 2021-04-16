import React, { Component,Fragment } from "react";
import data from '../data';
import Sidebar from "react-sidebar";
import SideBarContent from "./Sidebar"
class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      feeds:data(),
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentDidMount() {
      this.setState({
        feeds: data(),
      });
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
        <h2 style={{color:"white"}} className="text-center">All the Transactions made</h2>
        <div id="main-charts">
        <table className="table table-dark table-striped text-center">
        
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount </th>
          </tr>
        </thead>
        <tbody>
          {this.state.feeds[1].data.map((data) => (
            <tr key={data.label}>
              <td>{data.label}</td>
              <td>{data.value}</td>
              
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      </div>
      </Fragment>
    );
    
  }
}

export default Transactions;