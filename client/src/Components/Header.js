import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <a className="navbar-brand" href="/" >Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;