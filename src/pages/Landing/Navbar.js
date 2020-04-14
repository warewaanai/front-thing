import React, { Component } from 'react';
import Logo from '../../UI/AnimatedLogo.js';
import './Navbar.scss';


class NavBar extends Component {
    render() {
        return (
            <div id="Navbar">
            <div className="responsiveCrap">
                <Logo width="44px" />
                <p></p>
                <a href="#Main"><p className={this.props.where === 'join' ? 'active' : ''}>Join</p></a>
                <a href="#About"><p className={this.props.where === 'about' ? 'active' : ''}>About</p></a>
                <a href="#Communities"><p className={this.props.where === 'communities' ? 'active' : ''}>Communities</p></a>
                <a href="#Connector"><p className={this.props.where === 'connector' ? 'active' : ''}>Connector</p></a>
                <a href="#Guidelines"><p className={this.props.where === 'guidelines' ? 'active' : ''}>Guidelines</p></a>
            </div>
        </div>
        )
    }
}

export default NavBar;
