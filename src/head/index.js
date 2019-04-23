import React, {Component} from 'react';

import '../styles/head.scss';

export default class Head extends Component {
    render () {
        return (
            <div className="head">
                <div id="notification-bar">
                    <div id="notification">
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
            
                <div className="header container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <h1 className="logo"><strong>Olight Australia - Your Store For Olight Batteries, LED Flashlights &amp;
                                        Torches</strong><a href="https://www.olightstore.com.au/"
                                        title="Olight Australia - Your Store For Olight Batteries, LED Flashlights &amp; Torches"
                                        className="logo"><img src="https://www.olightstore.com.au/skin/frontend/smartwave/porto/images/logo.png"
                                            alt="Olight Australia - Your Store For Olight Batteries, LED Flashlights &amp; Torches" /></a>
                                </h1>
                            </div>

                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="header-login-area">
                                    <div className="login-holder">
                                        <a className="member-login-btn" href="javascript:void(0)"><i className="fa fa-lock" aria-hidden="true"></i>
                                            Member Login</a>
                                        <form action="https://www.olightstore.com.au/customer/account/loginPost/" method="post"
                                            id="login-form-header">
                                            <input name="form_key" type="hidden" value="WQj3IcnYfvKaviF0" />

                                            <span className="login-txt">Member Login</span>
                                            <div className="input-box">
                                                <input type="text" name="login[username]" value="" id="email"
                                                    className="input-text required-entry validate-email" title="Email Address"
                                                    placeholder="Email" />
                                            </div>
                                            <div className="input-box">
                                                <input type="password" name="login[password]"
                                                    className="input-text required-entry validate-password" id="pass" title="Password"
                                                    placeholder="Password" />
                                            </div>

                                            <button type="submit" className="button" title="Login" name="send"
                                                id="send2"><span><span>Login</span></span></button>

                                        </form>
                                    </div>

                                </div>

                                <div className="cart-area">
                                    <div className="custom-block">
                                        <span className="split" style={{borderColor: '#fff'}}></span><i className="fa fa-search"
                                            aria-hidden="true"></i>
                                        <div className="search-header-btn">
                                            <a href="javascript:void(0)" className="links-header search-icon">Search</a>
                                            <form id="search_mini_form" action="https://www.olightstore.com.au/catalogsearch/result/"
                                                method="get" className="searchautocomplete UI-SEARCHAUTOCOMPLETE"
                                                data-tip="Search entire store here..."
                                                data-url="//www.olightstore.com.au/searchautocomplete/ajax/get/" data-minchars="3"
                                                data-delay="500" data-hide-delay="1000">

                                                <div className="form-search">
                                                    <label for="search">Search:</label>


                                                    <input id="search" type="text" autocomplete="off" name="q" value=""
                                                        className="input-text UI-SEARCH UI-NAV-INPUT" maxlength="128" />

                                                    <button type="submit" title="Search"
                                                        className="button search-button"><span><span>Search</span></span></button>

                                                    <div className="searchautocomplete-loader UI-LOADER">
                                                        <div id="g01"></div>
                                                        <div id="g02"></div>
                                                        <div id="g03"></div>
                                                        <div id="g04"></div>
                                                        <div id="g05"></div>
                                                        <div id="g06"></div>
                                                        <div id="g07"></div>
                                                        <div id="g08"></div>
                                                    </div>

                                                    <div style={{display: 'none'}} id="search_autocomplete"
                                                        className="UI-PLACEHOLDER search-autocomplete searchautocomplete-placeholder"></div>
                                                </div>
                                            </form>
                                        </div>
                                        <span className="split" style={{borderColor: '#fff'}}></span><i className="fa fa-link"
                                            aria-hidden="true"></i><a href="https://www.olightstore.com.au/contacts"
                                            className="links-header">Contact</a>
                                        <span className="split" style={{borderColor: '#fff'}}></span><i className="fa fa-user"
                                            aria-hidden="true"></i><a href="https://www.olightstore.com.au/customer/account/"
                                            className="links-header">My Account</a>
                                        <span className="split" style={{borderColor: '#fff'}}></span><i className="fa fa-heart"
                                            aria-hidden="true"></i><a href="https://www.olightstore.com.au/wishlist/"
                                            className="links-header">Wishlist</a>
                                    </div>
                                    <div className="mini-cart">
                                        <a href="javascript:void(0)" className="mybag-link"><i className="icon-mini-cart"></i><span
                                                className="cart-info"><span className="cart-qty">0</span><span>item(s)</span></span></a>
                                        <div className="topCartContent block-content theme-border-color" style={{display: 'none'}}>
                                            <div className="inner-wrapper">
                                                <p className="cart-empty">
                                                    You have no items in your shopping cart. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            
            
            </div> 
        );
    }
}