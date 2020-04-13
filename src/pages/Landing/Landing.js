import React, { Component } from 'react';

import Main from './Main.js'
import About from './About.js'
import Communities from './Communities.js'
import Connector from './Connector.js'
import Guidelines from './Guidelines.js'
import NotEvil from './NotEvil.js'

import NavBar from './Navbar.js';
import './landing.scss'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            where: 'join'
        }
    }

    componentDidMount() {
        window.setInterval(this.handleScroll, 30)
    }

    lockMainDiv = (div) => {
        this.mainDiv = div;
    }

    handleScroll = (e) => {
        const y = this.mainDiv.scrollTop;
        const height = window.innerHeight - 60;

        this.setState({where: ['join', 'about', 'communities', 'connector', 'guidelines', 'notevil'][Math.floor((y + height / 2) / height)]});
    }

    render() {
        return (
            <div id="LandingContainer" onScroll={this.handleScroll} ref={this.lockMainDiv}>
                <NavBar where={this.state.where}/>
                <Main />
                <About/>
                <Communities />
                <Connector />
                <Guidelines />
                <NotEvil />
            </div>
        )
    }
}


export default Landing;
