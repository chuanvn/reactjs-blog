import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Template extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isHeart: false,
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

    clickHeart = (e, id) => {
        e.preventDefault();
        const { isHeart } = this.state;
        // if (id)
        if (isHeart) {
            this.props.clickHeart(-1);
        } else {
            this.props.clickHeart(1);
        }
        console.log(e);
        this.setState({
            isHeart: !isHeart
        })
    }

    renderItem = () => {
        const { heart, comment, view } = this.props;
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
                                    <li>
                                        <a href="#" className={heart === 1 ? 'text-danger' : ''} onClick={(e) => this.clickHeart(e, item.id)}>
                                            <i className="ion-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ion-chatbubble"></i>{comment !== 0 ? comment : null}</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ion-eye"></i>{view !== 0 ? view : null}</a>
                                    </li>
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

const mapStateToProps = (state) => {
    return {
        heart: state.heart,
        view: state.view,
        comment: state.comment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickHeart: (heart) => dispatch({
            payload: heart,
            type: 'UPDATE_HEART'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);