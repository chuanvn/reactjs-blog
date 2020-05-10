import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Comments extends Component {
    render() {
        return (
            <div className="container">
                <h4><strong>COMMENTS(12)</strong></h4>

                <div className="commnets-area">

                    <div className="comment">

                        <div className="post-info">

                            <div className="left-area">
                                <Link className="avatar" to="">
                                    <img src="/images/800x800.png" alt="Profile" /></Link>
                            </div>

                            <div className="middle-area">
                                <Link className="name" to=""><strong>Katy Liu</strong></Link>
                                <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                            </div>

                            <div className="right-area">
                                <h5 className="reply-btn" ><Link to=""><strong>REPLY</strong></Link></h5>
                            </div>

                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam</p>

                    </div>

                    <div className="comment">
                        <h5 className="reply-for">Reply for <Link to=""><strong>Katy Lui</strong></Link></h5>

                        <div className="post-info">

                            <div className="left-area">
                                <Link className="avatar" to=""><img src="/images/800x800.png" alt="Profile" /></Link>
                            </div>

                            <div className="middle-area">
                                <Link className="name" to=""><b>Katy Liu</b></Link>
                                <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                            </div>

                            <div className="right-area">
                                <h5 className="reply-btn" ><Link to=""><b>REPLY</b></Link></h5>
                            </div>

                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam</p>

                    </div>
                </div>
            </div>
        )
    }
}
