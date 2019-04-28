import React, { Component } from 'react';
import * as Boot from 'react-bootstrap';
import {CardColumns, Card} from 'react-bootstrap'

export default class Textcard extends Component {
    render() {
        return (
            <Boot.Container>
                <Boot.Row>
                    <Boot.Col className="p-0">
                        <CardColumns style={{columnCount: 4}}>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.
                                    </p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.
                                    </p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.
                                    </p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.
                                    </p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                        </CardColumns>
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
            
        );
    }
}