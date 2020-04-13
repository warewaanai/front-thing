import React from 'react'

import inv_logo from '../inv_flogo.png'
import './AnimatedLogo.scss'


function Logo(props) {
    return (
        <div className="AboveForm" style={{
            width: props.width,
            height: props.width,
        }}>
            <img src={inv_logo}  className="AnimatedLogo"  alt="logo" style={{
                width: '100%'
            }}/>
        </div>
    )
}

export default Logo;