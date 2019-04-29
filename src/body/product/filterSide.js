import React, {Component} from 'react';
import * as Boot from 'react-bootstrap';


export default class Filterside extends Component {
    state = {
        open: true
    }
    createItem = (items) => {
        return items.length && items.map(i => {
            return (
                <Boot.ListGroup.Item as="li">
                    {items.content}
                </Boot.ListGroup.Item>
            );
        })
    }
    render () {
        const { open } = this.state;
        const {title, items} = this.props;
        return (
            <Boot.Container>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                    <Boot.Button
                        onClick={() => this.setState({ open: !open })}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        >
                            {title}
                        </Boot.Button>
                        <Boot.Collapse in={this.state.open}>
                            <Boot.ListGroup as="ul">
                                {this.createItem(items)}
                                <Boot.ListGroup.Item as="li" active>
                                    Cras justo odio
                                </Boot.ListGroup.Item>
                            </Boot.ListGroup>;
                        </Boot.Collapse>
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
        );
    }
}