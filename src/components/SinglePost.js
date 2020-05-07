import React, { Component } from 'react';
import queryString from 'query-string';
import Comments from './Comments';

export default class SinglePost extends Component {
    render() {
        const query = queryString.parse(this.props.location.search);

        return (
            <div className="post-area section">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-12 no-right-padding">
                            <div className="main-post">
                                <div className="blog-post-inner">
                                    <div className="post-info">

                                        <div className="left-area">
                                            <a className="avatar" href="#">
                                                <img src="images/800x800.png" alt="Profile Image" />
                                            </a>
                                        </div>

                                        <div className="middle-area">
                                            <a className="name" href="#"><strong>Katy Liu</strong></a>
                                            <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                        </div>

                                    </div>

                                    <h3 className="title">
                                        <a href="#"><strong>{query.name}</strong></a>
                                    </h3>

                                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                                    <div className="post-image"><img src="images/500x333.png" alt="Blog Image" />
                                    </div>

                                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                                    <ul className="tags">
                                        <li><a href="#">Mnual</a></li>
                                        <li><a href="#">Liberty</a></li>
                                        <li><a href="#">Recommendation</a></li>
                                        <li><a href="#">Inspiration</a></li>
                                    </ul>
                                </div>

                                <div className="post-icons-area">
                                    <ul className="post-icons">
                                        <li><a href="#"><i className="ion-heart"></i>57</a></li>
                                        <li><a href="#"><i className="ion-chatbubble"></i>6</a></li>
                                        <li><a href="#"><i className="ion-eye"></i>138</a></li>
                                    </ul>

                                    <ul className="icons">
                                        <li>SHARE : </li>
                                        <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                        <li><a href="#"><i className="ion-social-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Comments/>
            </div>
        )
    }
}
