import React, {Component} from 'react';
import * as Boot from 'react-bootstrap';
import Lang from '../utils';
import ControlledCarousel from '../components/carousel';
import Cardcolumns from '../components/cardColumns';
import Photowall from '../components/photoWall';
import Textcard from '../components/textCard';


export default class Head extends Component {

    render () {
        return (
            <Boot.Container>
                <Boot.Row style={{marginTop: '15px'}}>
                    <Boot.Col>
                        <ControlledCarousel />
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        <Boot.Alert variant="secondary">
                            <h4>Why Olight Australia?</h4>
                        </Boot.Alert>
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        <Textcard />
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        <Photowall />
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        <Boot.Alert variant="dark">
                            <h4>Subscribe to get emails about discounts and special offers</h4>
                        </Boot.Alert>
                    </Boot.Col>
                </Boot.Row>
                <Boot.Row>
                    <Boot.Col>
                        <Cardcolumns title="Popular Products"/>
                    </Boot.Col>
                    <Boot.Col>
                        <Cardcolumns title="Latest Products"/>
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