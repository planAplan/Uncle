import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as Boot from 'react-bootstrap';
import Lang from '../utils';
import Navlistitem from '../components/navListItem';

let logoSrc = require('../images/logo.png')
const NavList = [
    {
        label: {text: 'Rechargeable', link: '/rechargeable'},
        subLabel: [{text: 'Rechargeable Torches', link: '/rechargeable/rechargeable_torches'}, {text: 'Rechargeable Headlamps', link: '/rechargeable/rechargeable_headlamps'}]
    },
    {
        label: {text: 'accessories', link: '/accessories'},
        subLabel: [
            {text: 'Camping & Hiking Headlamps', link: '/accessories/camping'},
            {text: 'Headlamps For Hunting', link: '/accessories/hunting'},
            {text: 'Running Headlampsg', link: '/accessories/running'},
            {text: 'Waterproof Headlamps', link: '/accessories/waterproof'},
        ]
    },
]
export default class Head extends Component {
    state = {
        products: this.props.products
    }
    componentWillMount () {

    }
    searchBtnhandle = () => {
        // this.props.changeLang()
    }
    goHome = () => {
        window.location.reload()
    }
    createNavItem = (products = []) => {
        if (!products.length) return products;
        return products.map((i, idx) => {
            if (!i.subpro.length) { //单层nav
                return (
                    <Boot.Nav.Item className="text-white d-flex align-items-center p-2">
                        <Link to={i.link}>{i.title}</Link>
                    </Boot.Nav.Item>
                );
            } else { //多层
                return (
                    <Boot.Nav.Item className="text-white d-flex align-items-center p-2">
                        <Navlistitem data={i}/>
                    </Boot.Nav.Item>
                );
            }
        })
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
                        <Boot.Navbar expand="lg" className="Nav" bg="dark" variant="light">
                            <Boot.Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Boot.Navbar.Collapse id="basic-navbar-nav">
                                <Boot.Nav className="mr-auto">
                                    <Boot.Nav.Item className="text-white d-flex align-items-center p-2">
                                        <Link to="/">{Lang('home')}</Link>
                                    </Boot.Nav.Item>
                                    {
                                        this.createNavItem(this.props.products)
                                    }
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