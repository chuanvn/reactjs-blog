import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Template extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            if (res) {
                this.setState({
                    data: res.data
                })
            }
        })
    }

    renderItem = () => {
        return this.state.data.map((item) => {
            return (
                <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="card h-100">
                        <div className="single-post post-style-1">

                            <Link to='/posts' className="blog-image">
                                <img src="images/500x333.png" alt="Blog Image" />
                            </Link>

                            <Link className="avatar" to=''>
                                <img src="images/500x500.png" alt="Profile Image" />
                            </Link>

                            <div className="blog-info">

                                <h4 className="title">
                                    <Link to={{
                                        pathname: '/posts',
                                        search: "?name=" + item.title
                                    }}>{item.title}</Link>
                                </h4>

                                <ul className="post-footer">
                                    <li><a href="#"><i className="ion-heart"></i>57</a></li>
                                    <li><a href="#"><i className="ion-chatbubble"></i>6</a></li>
                                    <li><a href="#"><i className="ion-eye"></i>138</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="blog-area section pt-5 pb-5">
                <div className="container">

                    <div className="row">
                        {this.renderItem()}
                    </div>
                </div>

                <div className="text-center pb-5">
                    <a className="load-more-btn" href="#"><strong>LOAD MORE</strong></a>
                </div>
            </div>
        )
    }
}
