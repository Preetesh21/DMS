import React, {Fragment} from 'react';
import Sidebar from "react-sidebar";
import SideBarContent from "./Sidebar";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: '',
      sidebarOpen: false,
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


  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your donation must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <Fragment>
      <Sidebar
        sidebar={<SideBarContent/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "LightGray", width:"200px" } }}>
          <div id="mySidenav">
            <button  onClick={() => this.onSetSidebarOpen(true)}  style={{fontSize:"30px", cursor:"pointer"}}>&#9776;</button>
          </div>
        </Sidebar>
        <div id="main-charts" className="container">
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Donation:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <input type="submit" value="Submit"></input>
      {this.state.errormessage}
      </form>
      </div>
      </Fragment>
    );
  }
}

export default Form;
