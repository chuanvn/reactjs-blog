import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Template extends Component {
  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(async (res) => {
        if (res) {
          //Init posts info
          const posts = res.data.map((post) => {
            post.heart = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            post.view = 0;
            post.comment = Math.floor(Math.random() * (30 - 1 + 1) + 1);
            post.isVoted = false;
            post.comments = [];
            return post;
          });

          // store post with redux
          this.props.updatePosts(posts);
        }
      });

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(async (res) => {
        if (res) {
          this.props.updateComments(res.data);
        }
      });
  };

  clickHeart = (e, id) => {
    e.preventDefault();
    this.props.clickHeart(id);
  };

  renderItem = () => {
    const { posts } = this.props;

    return posts.map((item) => {
      return (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="card h-100">
            <div className="single-post post-style-1">
              <Link to={'/posts/' + item.id  + '/' + item.title + '/' + item.body} className="blog-image"
               onClick={() => this.props.getPostItem(item.id)}>
                <img src="images/500x333.png" alt="Blog" />
              </Link>

              <Link className="avatar" to="">
                <img src="images/500x500.png" alt="Profile" />
              </Link>

              <div className="blog-info">
                <h4 className="title">
                  <Link
                    to={'/posts/' + item.id + '/' + item.title + '/' + item.body}
                    onClick={() => this.props.getPostItem(item.id)}
                  >
                    {item.title}
                  </Link>
                </h4>

                <ul className="post-footer">
                  <li>
                    <Link
                      to=""
                      className={item.isVoted === true ? "text-danger" : ""}
                      onClick={(e) => this.clickHeart(e, item.id)}
                    >
                      <i className="ion-heart"></i>
                      {/* {item.heart} */}
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
      <div className="blog-area section pt-5 pb-5">
        <div className="container">
          <div className="row">{this.renderItem()}</div>
        </div>

        <div className="text-center pb-5">
          <Link className="load-more-btn" to="">
            <strong>LOAD MORE</strong>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.heart);
  // console.log(state.posts);
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
    updateComments: (postId) =>
      dispatch({
        payload: postId,
        type: "UPDATE_COMMENTS",
      }),
    getPostItem: (postId) =>
      dispatch({
        payload: postId,
        type: "POST_ITEM",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
