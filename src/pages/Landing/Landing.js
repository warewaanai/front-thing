import React, { Component } from 'react'

import Background from './Background.js'

import Main from './Main.js'
import About from './About.js'
import Communities from './Communities.js'
import Connector from './Connector.js'
import Guidelines from './Guidelines.js'


import NavBar from './Navbar.js';
import './landing.scss'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            where: 'join',
            yScroll: 0,
            mouseX: 0,
            mouseY: 0
        }
    }

    componentDidMount() {
        window.setInterval(this.handleScroll, 10);
    }

    lockMainDiv = (div) => {
        this.mainDiv = div;
    }

    handleMouse = (e) => {
        this.setState({
            MouseX: e.clientX,
            MouseY: e.clientY
        });
    }

    handleScroll = (e) => {
        const y = this.mainDiv.scrollTop;
        const height = window.innerHeight - 60;

        this.setState({
            where: ['join', 'about', 'communities', 'connector', 'guidelines'][Math.floor((y + height / 2) / height)],
            yScroll: y
        });
    }

    render() {
        return (
            <div id="LandingContainer" ref={this.lockMainDiv} onMouseMove={this.handleMouse}>
                <Background y={this.state.yScroll} mouseX={this.state.MouseX} mouseY={this.state.MouseY}/>
                <NavBar where={this.state.where}/>
                <Main />
                <About/>
                <Communities />
                <Connector />
                <Guidelines />
            </div>
        );
    }
}


export default Landing;
