import React, { Component } from 'react';
import './landing.scss'
import './guidelines.scss'

import background from '../../assets/Pictures/backgrounds/2.png'

class Guidelines extends Component {
    render () {
        return (
            <div id="Guidelines" className="fullscreen" style={{backgroundImage: `url(${background})`}}>
                
            </div>
        );
    }
}

export default Guidelines;
