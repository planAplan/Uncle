import React, {Component} from 'react';


let logoSrc = require('../images/logo.png')
export default class Head extends Component {
    render () {
        return (
            <div className="head">
                <div id="notification-bar" className="notification-bar">
                    <div id="notification" className="notification">
                        <span className="notification-content">
                            <p>
                                &nbsp;Orders for&nbsp;
                                <strong>
                                    <span style={{color: '#ff0000'}}>&nbsp;AU customers&nbsp;</span>
                                </strong>
                                &nbsp;only!&nbsp;|&nbsp;
                                <strong>
                                    <span style={{color: '#ff0000'}}>&nbsp;FREE&nbsp;</span>
                                </strong>
                                &nbsp;shipping over&nbsp;
                                <strong>
                                &nbsp;$75&nbsp;
                                </strong>
                            </p>
                        </span>
                    </div>
                </div>
            
                <div className="header-container">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logoSrc} alt="logo"/>
                        </div>
                        <div className="logo-tools"></div>
                    </div>
                    <div className="nav">
                    </div>
                </div>
            </div> 
        );
    }
}