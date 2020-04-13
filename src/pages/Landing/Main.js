import React, { Component } from 'react';

import FormInput from '../../UI/FormInput.js'
import FormButton from '../../UI/FormButton.js'

import discord from '../../3rd/discord.png'
import google from '../../3rd/google.png'
import facebook from '../../3rd/facebook.svg'
import twitter from '../../3rd/twitter.png'

import background from '../../assets/Pictures/backgrounds/2.jpg'

import './landing.scss'
import './main.scss'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            s1: 'login'
        };
    }

    choose = (choice) => {
        this.setState({
            sl: choice
        });
    }

    render() {
        return (
            <div id="Main" className="fullscreen" style={{ backgroundImage: `url(${background})` }}>
                <div className="main_form">
                    <SLNav choose={this.choose} />
                    {this.state.sl === 'signup' ? <SignUp/> : <LogIn/>}
                </div>
            </div>
        );
    }
}

class SLNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: 'login'
        }
    }

    changeChoice = (option) => {
        this.props.choose(option);
        this.setState({
            choice: (option === 'signup' ? 'signup' : 'login')
        })
    }

    render() {
        const signup_active = this.state.choice === 'signup' ? 'selected' : '';
        const login_active = this.state.choice === 'login' ? 'selected' : '';

        return (
            <div className="SLNav">
                <button className={`${login_active}`} id="login_button" onClick={ () => {this.changeChoice('login')} }>Login</button>
                <button className={`${signup_active}`} id="signup_button" onClick={ () => {this.changeChoice('signup')} } >Signup</button>
            </div>
        );
    }
}

class SignUp extends Component {

    render() {
        return (
            <form className="SLForm" autoComplete="off">
                <FormInput placeholder="Username"/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'}}>

                    <FormInput placeholder="First Name"/>
                    <FormInput placeholder="Last Name"/>
                </div>
                <FormInput placeholder="Email"/>
                <FormInput password placeholder="Password"/>
                <br/>
                <FormButton aspect="blue" width='275px'>Register</FormButton>
                <br/>
            </form>
        )
    }
}

class LogIn extends Component {
    render() {
        return (
            <form className="SLForm">
                <FormInput aspect="green" placeholder="Email"/>
                <FormInput aspect="green" password placeholder="Password"/>
                <br/>
                <FormButton aspect="green" width='275px'>Login</FormButton>
                <br/>
                <ThirdParty />
            </form>
        )
    }
}

class ThirdParty extends Component {
    callGoogle = () => {
        console.log('google');
    }
    callDiscord = () => {
        console.log('discord');

    }
    callFacebook = () => {
        console.log('facebook');
    }
    callTwitter = () => {
        console.log('twitter');
    }


    render() {
        return (
            <div>                
                <span style={{color: 'gray'}}>Or Login with</span>
                <div>
                    <img src={`${google}`} alt="google" style={{margin: '12px auto', cursor: 'pointer', padding: '10px'}} width="30" onClick={this.callGoogle}/>
                    <img src={`${discord}`} alt="discord" style={{margin: '12px auto', cursor: 'pointer', padding: '10px'}} width="30" onClick={this.callDiscord}/>
                    <img src={`${facebook}`} alt="facebook" style={{margin: '12px auto', cursor: 'pointer', padding: '10px'}} width="30" onClick={this.callFacebook}/>
                    <img src={`${twitter}`} alt="twitter" style={{margin: '12px auto', cursor: 'pointer', padding: '10px'}} width="30" onClick={this.callTwitter}/>
                </div>
            </div>
        )
    }
}

export default Main;
