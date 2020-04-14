import React, { Component } from 'react';
import './landing.scss'
import './about.scss'

import background from '../../assets/Pictures/backgrounds/2.png'


class About extends Component {
    render () {
        return (
            <div id="About" className="fullscreen" style={{backgroundImage: `url(${background})`}}>
                
            </div>
        );
    }
}

export default About;
