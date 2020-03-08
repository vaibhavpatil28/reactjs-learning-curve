import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Welcome.css';
import { welcomeGreating, welcomeImg } from './IntroToJsx'

const element = (props) => welcomeGreating(props);

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <header className="Welcome-header">
                    {welcomeImg(logo)}
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    {element(this.props)}
                    <a
                        className="Welcome-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>)
    }
}
export default Welcome;