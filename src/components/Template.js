import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 6,
    };
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 6 };
    });
  }

  randomImage() {
    const num = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    return `/images/anh-${num}.jpg`;
  }
  componentDidMount = () => {
    if (!this.props.posts || this.props.posts.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(async (res) => {
          if (res) {
            //Init posts info
            const posts = res.data.map((post) => {
              post.heart = 0;
              post.view = Math.floor(Math.random() * (50 - 1 + 1) + 1);
              post.comment = Math.floor(Math.random() * (5 - 1 + 1) + 1);
              post.isVoted = false;
              post.img = this.randomImage()
              post.comments = [];
              return post;
            });

            // store post with redux
            this.props.updatePosts(posts);
          }
        });
    }
  };

  clickHeart = (e, id) => {
    e.preventDefault();
    this.props.clickHeart(id);
  };

  renderItem = () => {
    const { posts } = this.props;

    return posts.slice(0, this.state.visible).map((item) => {
      return (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="card h-100">
            <div className="single-post post-style-1">
              <Link to={"/posts/" + item.id} className="blog-image">
                <img
                  src={item.img}
                  alt="Blog"
                />
              </Link>

              <Link className="avatar" to="">
                <img
                  src="http://via.placeholder.com/100x100?text=100x100"
                  alt="Profile"
                />
              </Link>

              <div className="blog-info">
                <h4 className="title">
                  <Link to={"/posts/" + item.id}>{item.title}</Link>
                </h4>

                <ul className="post-footer">
                  <li>
                    <Link
                      to=""
                      className={item.isVoted === true ? "text-danger" : ""}
                      onClick={(e) => this.clickHeart(e, item.id)}
                    >
                      <i className="ion-heart"></i>
                      {item.heart}
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="ion-chatbubble"></i>
                      {item.comment}
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="ion-eye"></i>
                      {item.view}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="blog-area section pt-5 pb-5">
          <div className="container">
            <div className="row">{this.renderItem()}</div>
          </div>
          {this.state.visible < this.props.posts.length && (
            <div className="text-center pb-5">
              <Link
                className="load-more-btn"
                onClick={this.loadMore.bind(this)}
              >
                <strong>LOAD MORE</strong>
              </Link>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heart: state.heart,
    view: state.view,
    comment: state.comment,
    posts: state.posts,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickHeart: (postId) =>
      dispatch({
        payload: postId,
        type: "UPDATE_HEART",
      }),
    updatePosts: (posts) =>
      dispatch({
        payload: posts,
        type: "UPDATE_POSTS",
      }),
    getPostId: (postId) =>
      dispatch({
        payload: postId,
        type: "GET_POSTID",
      }),
    updateComments: (comments) =>
      dispatch({
        payload: comments,
        type: "UPDATE_COMMENTS",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
