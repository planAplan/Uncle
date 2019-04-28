import React, {Component} from 'react';
import * as Boot from 'react-bootstrap';
import Lang from '../utils';


export default class Foot extends Component {

    render () {
        return (
            <Boot.Container>
                <Boot.Row style={{marginTop: '15px'}}>
                    <Boot.Col>
                        <Boot.Alert variant="dark">
                            <h4>About Olight Australia</h4>
                        </Boot.Alert>
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