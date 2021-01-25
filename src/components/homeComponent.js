import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <Container style={
                {
                    marginTop: 100
                }
            }>
                <Row>
                    <h1>Home Page</h1>
                </Row>
            </Container>
        );
    }
}