import React, { Component } from 'react';
import Comments from './Comments';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {}
        }
    }

    componentDidMount = () => {
        const { match, posts } = this.props;
        let post = posts.find(item => {
            if(item.id === parseInt(match.params.id)) {
                return item;
            }

            return false;
        });
        this.setState({item: post});
    }

    render() {
        const { item } = this.state;
        return (
            <div className="post-area section">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-12 no-right-padding">
                            <div className="main-post">
                                <div className="blog-post-inner">
                                    <div className="post-info">

                                        <div className="left-area">
                                            <Link className="avatar" to="">
                                                <img src="/images/800x800.png" alt="Profile" />
                                            </Link>
                                        </div>

                                        <div className="middle-area">
                                            <Link className="name" to=""><strong>Katy Liu</strong></Link>
                                            <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                        </div>

                                    </div>

                                    <div>
                                        <h3 className="title">
                                            <Link to=""><strong>{item ? item.title : ''}</strong></Link>
                                        </h3>

                                        <p className="para">{item ? item.body : ''}</p>

                                        {/* <div className="post-image"><img src="/images/500x333.png" alt="Blog" /></div> */}

                                    </div>
                                    <ul className="tags">
                                        <li><Link to="">Mnual</Link></li>
                                        <li><Link to="">Liberty</Link></li>
                                        <li><Link to="">Recommendation</Link></li>
                                        <li><Link to="">Inspiration</Link></li>
                                    </ul>
                                </div>

                                <div className="post-icons-area">
                                    <ul className="post-icons">
                                        <li><Link to=""><i className="ion-heart"></i>57</Link></li>
                                        <li><Link to=""><i className="ion-chatbubble"></i>6</Link></li>
                                        <li><Link to=""><i className="ion-eye"></i>138</Link></li>
                                    </ul>

                                    <ul className="icons">
                                        <li>SHARE : </li>
                                        <li><Link to=""><i className="ion-social-facebook"></i></Link></li>
                                        <li><Link to=""><i className="ion-social-twitter"></i></Link></li>
                                        <li><Link to=""><i className="ion-social-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Comments />
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps)(SinglePost);
