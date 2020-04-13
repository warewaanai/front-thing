import React, { Component } from 'react';
import './FormInput.scss';

class FormInput extends Component {
    constructor(props) {
        super(props);

        let aspect;
        switch (this.props.aspect) {
            case 'default':
            default: {
                aspect = 'FormInputDefault';
                break;
            }
            case 'warning': {
                aspect = 'FormInputWarning';
                break;
            }
            case 'error': {
                aspect = 'FormInputError';
                break;
            }
            case 'green': {
                aspect = 'FormInputGreen';
                break;
            }
        }

        this.state = {
            assignedClass: aspect
        };
    }

    handleClick = (e) => {
        if (this.props.onClick)
            this.props.onClick(this, e);
    }

    handleChange = (e) => {
        if (this.props.onChange)
            this.props.onChange(this, e);
    }
    
    handleHover = (e) => {
        if (this.props.onHover)
            this.props.onHover(this, e);
    }

    render() {
        return (
            <div className={this.state.assignedClass}>
                <input
                    type={this.props.password ? 'password' : 'text'}
                    className="FormInputText"
                    placeholder=""
                    spellCheck="false"
                    required
                    />
                <label className="FormLabel">
                    <span className="content">
                        {this.props.placeholder}
                    </span>
                </label>
            </div>
        );
    }
}
export default FormInput;
