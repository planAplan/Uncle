import React, {Component} from 'react';
import * as Boot from 'react-bootstrap';
import Lang from '../../utils';
import Filterside from './filterSide';


export default class Product extends Component {
    getSides = () => {
        
    }
    getItems = () => {
        return [
            {
                content: <a href="https://www.olightstore.com.au/rechargeable/torches/">Rechargeable Torches</a>
            },
            {
                content: <a href="https://www.olightstore.com.au/rechargeable/headlamps/">Rechargeable Headlamps</a>
            },
        ]
    }
    render () {
        return (
            <Boot.Container>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col lg={{span: 3}}>
                        <Filterside title="Rechargeable" items={this.getItems()}/>
                    </Boot.Col>
                    <Boot.Col>
                        
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
        );
    }
}

/**
 * 
            <Boot.Container>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
 */