import React, { Component } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from 'axios';
import { baseUrl } from "../shared/baseUrl";

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete = (id) => {
        axios.delete(baseUrl + id)
            .then((result) => console.log(result));
    }

    handleClose = () => {
        this.setState({ show: false });
        console.log(this.state.posts);
    }

    edit = (id) => {
        axios.get(baseUrl + id)
            .then(
                (post) => {
                    this.setState({ posts: post.data, show: true });
                }
            )
    }

    // handleChange = (e) => {
    //     console.log(e);
    // }

    componentDidMount() {
        console.log(this.props.posts)
        // this.setState({ posts: this.props.posts, loading: false });
    }

    render() {
        // const render = this.props.posts.map((post) => {
        //     return (<li key={post.id}>{post.title}</li>)
        // })
        return (
            <div style={{ marginTop: 75 }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Id</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {render} */}
                        {
                            this.props.posts.map((post) => {
                                return (
                                    <tr key={post.id}>
                                        <td>{post.userId}</td>
                                        <td>{post.title}</td>
                                        <td>{post.id}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => { this.edit("1") }}>Edit</Button>
                                        </td>
                                        <td>
                                            <Button variant="primary" onClick={() => { this.delete("1") }}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" value={this.state.posts.id} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.state.posts.title} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}