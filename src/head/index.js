import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as Boot from 'react-bootstrap';
import Lang from '../utils';


let logoSrc = require('../images/logo.png')
export default class Head extends Component {

    searchBtnhandle = () => {
        // this.props.changeLang()
    }
    goHome = () => {
        window.location.reload()
    }
    render () {
        return (
            <Boot.Container>
                <Boot.Row>
                    <Boot.Col className="center h48">
                        Orders for AU customers only! | FREE shipping over $75
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row>
                    <Boot.Col lg={{span: 6}}>
                        <Boot.Image src={logoSrc} onClick={this.goHome}/>
                    </Boot.Col>
                    <Boot.Col lg={{span: 6}}>
                        <Boot.Container lg={{ span: 12}}>
                            <Boot.Row>
                                <Boot.Col>
                                    <Boot.InputGroup className="mb-3">
                                        <Boot.FormControl
                                            placeholder={Lang('searchPlaceHolder')}
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Boot.InputGroup.Append>
                                        <Boot.Button variant="outline-secondary" onClick={this.searchBtnhandle}>{Lang('searchBtn')}</Boot.Button>
                                        </Boot.InputGroup.Append>
                                    </Boot.InputGroup>
                                </Boot.Col>
                            </Boot.Row>
                            <Boot.Row>
                                <Boot.Col>
                                    <Boot.ButtonGroup className="float-right">
                                        <Boot.Button variant="link">{Lang('contract')}</Boot.Button>
                                        <Boot.Button variant="link">{Lang('contract')}</Boot.Button>
                                        <Boot.Button variant="link" onClick={this.props.changeLang}>{Lang('language')}</Boot.Button>
                                    </Boot.ButtonGroup>
                                </Boot.Col>
                            </Boot.Row>
                        </Boot.Container>
                        
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row>
                    <Boot.Col lg={{span: 12}}>
                        <Boot.Navbar expand="lg" className="Nav" bg="dark" variant="dark">
                            <Boot.Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Boot.Navbar.Collapse id="basic-navbar-nav">
                                <Boot.Nav className="mr-auto">
                                    <Boot.Nav.Item className="text-white d-flex align-items-center p-2">
                                        <Link to="/">{Lang('home')}</Link>
                                    </Boot.Nav.Item>
                                    <Boot.Nav.Item className="text-white d-flex align-items-center p-2">
                                        <Link to="/link">Link</Link>
                                    </Boot.Nav.Item>
                                    <Boot.Nav.Item className="text-white d-flex align-items-center p-2">
                                        <Boot.OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={(
                                                <Boot.ListGroup>
                                                    <Boot.ListGroup.Item><Link to="/rechargeable/torches">Rechargeable Torches</Link></Boot.ListGroup.Item>
                                                    <Boot.ListGroup.Item><Link to="/rechargeable/headlamps">Rechargeable Headlamps</Link></Boot.ListGroup.Item>
                                                </Boot.ListGroup>
                                            )}
                                        >
                                            <span><Link to="/rechargeable">Rechargeable</Link></span>
                                        </Boot.OverlayTrigger>
                                    </Boot.Nav.Item>
                                    {/* <Boot.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <Boot.NavDropdown.Item as="li">
                                            <Link to="/action/3.1">Action</Link>
                                        </Boot.NavDropdown.Item>
                                        <Boot.NavDropdown.Item as="li">
                                            <Link to="/action/3.2">Another action</Link>
                                        </Boot.NavDropdown.Item>
                                        <Boot.NavDropdown.Item as="li">
                                            <Link to="/action/3.3">Something</Link>
                                        </Boot.NavDropdown.Item>
                                        <Boot.NavDropdown.Item as="li">
                                            <Link to="/action/3.4">Separated link</Link>
                                        </Boot.NavDropdown.Item>
                                    </Boot.NavDropdown> */}
                                </Boot.Nav>
                            </Boot.Navbar.Collapse>
                        </Boot.Navbar>
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
        );
    }
}

/**
 * 
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        
                    </Boot.Col>
                </Boot.Row>
 */