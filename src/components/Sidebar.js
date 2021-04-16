import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SideBarContent extends Component{
    render(){
        return(
           
                <>
                <h6>Menu</h6>
                <Link to={{ pathname: '/' }}>
                <h6>Home</h6>
                </Link>
                <Link to={{ pathname: '/form'}}>
                <h6>Donate</h6>
                </Link>
                <Link to={{ pathname: '/transactions' }}>
                <h6>Transactions</h6>
                </Link>
                <Link to={{ pathname: '/regression' }}>
                <h6>Regression</h6>
                </Link>
                <Link to={{ pathname: '/about' }}>
                <h6>About Us</h6>
                </Link>
            </>
        );
    }
}
export default SideBarContent;