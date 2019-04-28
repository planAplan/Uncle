import React, { Component } from 'react';
import * as Boot from 'react-bootstrap';
import {CardColumns, Card} from 'react-bootstrap'

export default class Cardcolumns extends Component {
    render() {
        return (
            <Boot.Container>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        <Boot.Alert variant="secondary" className="border-0">{this.props.title}</Boot.Alert>
                        <CardColumns style={{columnCount: 2}}>
                            <Card>
                                <Card.Img variant="top" src="https://www.olightstore.com.au/media/wysiwyg/custom-images/rechargeable.jpg" />
                                <Card.Body>
                                    <Card.Title>Olight M3XS-UT Javelot Basic Hunting Kit</Card.Title>
                                    <Card.Text>
                                        $259.95
                                    </Card.Text>
                                    <Card.Text>
                                        <Boot.Button>
                                            Add to Cart
                                        </Boot.Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://www.olightstore.com.au/media/wysiwyg/custom-images/hunting.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardColumns>
                        <CardColumns style={{columnCount: 2}}>
                            <Card>
                                <Card.Img variant="top" src="https://www.olightstore.com.au/media/wysiwyg/custom-images/rechargeable.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://www.olightstore.com.au/media/wysiwyg/custom-images/hunting.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardColumns>
                        <CardColumns style={{columnCount: 2}}>
                            <Card>
                                <Card.Img variant="top" src="https://www.olightstore.com.au/media/wysiwyg/custom-images/rechargeable.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://www.olightstore.com.au/media/wysiwyg/custom-images/hunting.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardColumns>
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
        );
    }
}