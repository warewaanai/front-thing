import React, { Component } from 'react';

import background from '../../assets/Pictures/backgrounds/2.png'
import './landing.scss'

class Connector extends Component {
    render () {
        return (
            <div id="Connector" className="fullscreen" style={{backgroundImage: `url(${background})`}}>

            </div>
        )
    }
}

export default Connector;