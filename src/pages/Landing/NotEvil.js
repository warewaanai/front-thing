import React, { Component } from 'react';
import './landing.scss'

import background from '../../assets/Pictures/backgrounds/2.jpg'


class NotEvil extends Component {
    render () {
        return (
            <div id="NotEvil" className="fullscreen" style={{backgroundImage: `url(${background})`}}>
                
            </div>
        );
    }
}

export default NotEvil;
