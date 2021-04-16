import React, { Component } from 'react';

class SideBarContent extends Component{
    render(){
        return(
            <div>
                <h3>Menu</h3>
                <a href="#">Home</a><br></br>
                <a href="#" style={{margin:"10px"}}>Donate</a><br></br>
                <a href="#">Transactions</a><br></br>
                <a href="#">About us</a><br></br>
            </div>
        );
    }
}
export default SideBarContent;