import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <nav className="header-navbar">
                <a className="navbar-brand" href="/" >Home</a>
                <a className="navbar-brand" href="/product" >Products</a>
            </nav>
        );
    }
}

export default Header;