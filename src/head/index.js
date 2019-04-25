import React, {Component} from 'react';
import * as Boot from 'react-bootstrap';
import Lang from '../utils';
import ControlledCarousel from '../components/carousel';

let logoSrc = require('../images/logo.png')
export default class Head extends Component {

    searchBtnhandle = () => {
        // this.props.changeLang()
    }
    goHome = () => {

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
                                    <Boot.ButtonGroup className="floatR">
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
                        <Boot.Navbar bg="dark" expand="lg" className="Nav">
                            <Boot.Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Boot.Navbar.Collapse id="basic-navbar-nav">
                                <Boot.Nav className="mr-auto">
                                    <Boot.Nav.Link href="#home">{Lang('home')}</Boot.Nav.Link>
                                    <Boot.Nav.Link href="#link">Link</Boot.Nav.Link>
                                    <Boot.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <Boot.NavDropdown.Item href="#action/3.1">Action</Boot.NavDropdown.Item>
                                        <Boot.NavDropdown.Item href="#action/3.2">Another action</Boot.NavDropdown.Item>
                                        <Boot.NavDropdown.Item href="#action/3.3">Something</Boot.NavDropdown.Item>
                                        <Boot.NavDropdown.Divider />
                                        <Boot.NavDropdown.Item href="#action/3.4">Separated link</Boot.NavDropdown.Item>
                                    </Boot.NavDropdown>
                                </Boot.Nav>
                            </Boot.Navbar.Collapse>
                        </Boot.Navbar>
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row style={{marginTop: '15px'}}>
                    <Boot.Col>
                        <ControlledCarousel />
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
        );
    }
}