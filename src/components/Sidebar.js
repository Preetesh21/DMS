import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SideBarContent extends Component{
    render(){
        return(
           
            <div>
                <h3>Menu</h3>
                <Link to={{ pathname: '/' }}>
                <h3>Home</h3>
                </Link>
                <Link to={{ pathname: '/form'}}>
                <h3>Donate</h3>
                </Link>
                <Link to={{ pathname: '/' }}>
                <h3>Transactions</h3>
                </Link>
                <Link to={{ pathname: '/' }}>
                <h3>About Us</h3>
                </Link>
            </div>
        );
    }
}
export default SideBarContent;