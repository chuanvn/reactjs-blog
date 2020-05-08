import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Template extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log(this.props.posts);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(async (res) => {
        if (res) {
          //Init posts info
          const posts = res.data.map((post) => {
            post.heart = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            post.view = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
            post.comment = Math.floor(Math.random() * (30 - 1 + 1) + 1);
            post.isVoted = false;
            return post;
          });

          // store post with redux
          this.props.updatePosts(posts);
        }
      });
  };

  clickHeart = (e, id) => {
    e.preventDefault();
    this.props.clickHeart(id);
  };

  renderItem = () => {
    const { heart, comment, view, posts } = this.props;
    return posts.map((item) => {
      return (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="card h-100">
            <div className="single-post post-style-1">
              <Link to="/posts" className="blog-image">
                <img src="images/500x333.png" alt="Blog Image" />
              </Link>

              <Link className="avatar" to="">
                <img src="images/500x500.png" alt="Profile Image" />
              </Link>

              <div className="blog-info">
                <h4 className="title">
                  <Link
                    to={{
                      pathname: "/posts",
                      search: "?name=" + item.title,
                    }}
                  >
                    {item.title}
                  </Link>
                </h4>

                <ul className="post-footer">
                  <li>
                    <a
                      href="#"
                      className={item.isVoted === true ? "text-danger" : ""}
                      onClick={(e) => this.clickHeart(e, item.id)}
                    >
                      <i className="ion-heart"></i>
                      {item.heart}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-chatbubble"></i>
                      {item.comment}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-eye"></i>
                      {item.view}
                    </a>
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
      <div className="blog-area section pt-5 pb-5">
        <div className="container">
          <div className="row">{this.renderItem()}</div>
        </div>

        <div className="text-center pb-5">
          <a className="load-more-btn" href="#">
            <strong>LOAD MORE</strong>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heart: state.heart,
    view: state.view,
    comment: state.comment,
    posts: state.posts,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
