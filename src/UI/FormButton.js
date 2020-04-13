import React, { Component } from 'react';
import './FormButton.scss'

class FormButton extends Component {
    constructor(props) {
        super(props);

        let aspect;
        switch (this.props.aspect) {
            default: {
                aspect = 'FormButtonDefault';
                break;
            }
            case 'red': {
                aspect = 'FormButtonRed';
                break;
            }
            case 'green': {
                aspect = 'FormButtonGreen';
                break;
            }
            case 'blue': {
                aspect = 'FormButtonBlue';
                break;
            }
        }

        this.state = {
            assignedClass: aspect
        };
    }

    render() {
        return (
            <input className={this.state.assignedClass} type="button" value={this.props.children} style={{width: this.props.width}}/>
        );
    }
}

export default FormButton;
