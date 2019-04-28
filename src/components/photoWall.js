import React, { Component } from 'react';
import * as Boot from 'react-bootstrap';
import {CardColumns, Card} from 'react-bootstrap'

export default class Photowall extends Component {
    render() {
        return (
            <Boot.Container>
                <Boot.Row>
                    <Boot.Col className="p-0">
                        <CardColumns style={{columnCount: 4}}>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/rechargeable.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/hunting.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/headlamps.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/search-rescue.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/tactical.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/pocket.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/camping-outdoor.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                            <Card>
                                <Card.Img src="https://www.olightstore.com.au/media/wysiwyg/custom-images/accessories.jpg" />
                                <Card.Text>
                                    <span className="text-muted center">Rechargeable</span>
                                </Card.Text>
                            </Card>
                        </CardColumns>
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
        );
    }
}