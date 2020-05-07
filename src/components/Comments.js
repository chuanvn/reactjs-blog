import React, { Component } from 'react'

export default class Comments extends Component {
    render() {
        return (
            <div className="container">
                <h4><strong>COMMENTS(12)</strong></h4>

                <div className="commnets-area">

                    <div className="comment">

                        <div className="post-info">

                            <div className="left-area">
                                <a className="avatar" href="#">
                                    <img src="images/800x800.png" alt="Profile Image" /></a>
                            </div>

                            <div className="middle-area">
                                <a className="name" href="#"><strong>Katy Liu</strong></a>
                                <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                            </div>

                            <div className="right-area">
                                <h5 className="reply-btn" ><a href="#"><strong>REPLY</strong></a></h5>
                            </div>

                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam</p>

                    </div>

                    <div className="comment">
                        <h5 className="reply-for">Reply for <a href="#"><strong>Katy Lui</strong></a></h5>

                        <div className="post-info">

                            <div className="left-area">
                                <a className="avatar" href="#"><img src="images/800x800.png" alt="Profile Image" /></a>
                            </div>

                            <div className="middle-area">
                                <a className="name" href="#"><b>Katy Liu</b></a>
                                <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                            </div>

                            <div className="right-area">
                                <h5 className="reply-btn" ><a href="#"><b>REPLY</b></a></h5>
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
