import React, { Component } from "react";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import List from "./ListComponent";
import Home from "./homeComponent";
import { fetchPosts } from "../data/handler";
import axios from 'axios';
import { baseUrl } from "../shared/baseUrl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: "true",
            posts: []
        }
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get(baseUrl)
            .then((posts) => {
                this.setState({ posts: posts.data, loading: false });
            });
    }

    // fetchPosts = async () => {
    //     return await fetch(baseUrl)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             } else {
    //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //                 error.response = response;
    //                 throw error;
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(posts => {
    //             this.setState({ posts: posts, loading: false });
    //         })
    //         .catch(error => console.log(error));
    // }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/list">
                            {this.state.loading ? <div style={{ marginTop: 100 }}><h1>Loading</h1></div> : <List posts={this.state.posts} />}
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}