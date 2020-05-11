import React, { Component } from "react";
import Comments from "./Comments";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Sidebar } from "./common/Sidebar";
import { RandomPosts } from "./RandomPosts";

class SinglePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
    };
  }

  async getPostById() {
    let { match, posts } = this.props;
    if (!this.props.posts || this.props.posts.length === 0) {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      if (res) {
        //Init posts info
        posts = res.data.map((post) => {
          post.heart = 0;
          post.view = 0;
          post.comment = Math.floor(Math.random() * (5 - 1 + 1) + 1);
          post.isVoted = false;
          post.comments = [];
          return post;
        });

        // store post with redux
        await this.props.updatePosts(posts);
      }
    }

    let post = posts.find((item) => {
      if (item.id === parseInt(match.params.id)) {
        return item;
      }

      return false;
    });

    post = await this.getComments(post);
    post.view += 1;
    this.setState({ item: post });
  }

  getComments = async (post) => {
    if (!post.comments || post.comments.length !== post.comment) {
      let comments = [];
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );

      if (res) {
        //Init posts info
        for (let i = 0; i < post.comment; i++) {
          comments.push(res.data[i]);
        }

        post.comments = comments;
      }

      await this.props.updateComment(post);
    }

    await this.props.updateView(post.id);
    return post;
  };

  clickHeart = (e, id) => {
    e.preventDefault();
    this.props.clickHeart(id);
  };

  componentDidMount() {
    this.getPostById();
  }

  addNewComment = (comment) => {
    const { item } = this.state;
    comment.id = item.comments.length + 1;
    item.comments.unshift(comment);
    item.comment += 1;
    this.props.updateComment(item);
    this.setState({ item });
  };

  render() {
    const { item } = this.state;
    // console.log(item);
    return (
      <>
        <Header />
        <section className="post-area section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 no-right-padding">
                <div className="main-post">
                  <div className="blog-post-inner">
                    <div className="post-info">
                      <div className="left-area">
                        <a className="avatar" href="#">
                          <img
                            src="/images/avatar-1-120x120.jpg"
                            alt="Profile Image"
                          />
                        </a>
                      </div>
                      <div className="middle-area">
                        <a className="name" href="#">
                          <b>Katy Liu</b>
                        </a>
                        <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                      </div>
                    </div>
                    {/* post-info */}
                    <h3 className="title">
                      <a href="javascript:void(0)">
                        <b>{item.title}</b>
                      </a>
                    </h3>
                    <p className="para">{item.body}</p>

                    <ul className="tags">
                      <li>
                        <a href="#">Mnual</a>
                      </li>
                      <li>
                        <a href="#">Liberty</a>
                      </li>
                      <li>
                        <a href="#">Recommendation</a>
                      </li>
                      <li>
                        <a href="#">Inspiration</a>
                      </li>
                    </ul>
                  </div>
                  {/* blog-post-inner */}
                  <div className="post-icons-area">
                    <ul className="post-icons">
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

                    <ul className="icons">
                      <li>SHARE : </li>
                      <li>
                        <Link to="">
                          <i className="ion-social-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="ion-social-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="ion-social-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="post-footer post-info">
                    <div className="left-area">
                      <a className="avatar" href="#">
                        <img
                          src="/images/avatar-1-120x120.jpg"
                          alt="Profile Image"
                        />
                      </a>
                    </div>
                    <div className="middle-area">
                      <a className="name" href="#">
                        <b>Katy Liu</b>
                      </a>
                      <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                    </div>
                  </div>
                  {/* post-info */}
                </div>
                {/* main-post */}
              </div>
              {/* col-lg-8 col-md-12 */}
              <Sidebar />
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
        {/* post-area */}
        <RandomPosts posts={this.props.posts} />
        <Comments comments={item.comments} addNewComment={this.addNewComment} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (posts) =>
      dispatch({
        payload: posts,
        type: "UPDATE_POSTS",
      }),

    updateComment: (comments) =>
      dispatch({
        payload: comments,
        type: "UPDATE_COMMENT",
      }),

    updateView: (postId) =>
      dispatch({
        payload: postId,
        type: "UPDATE_VIEW",
      }),
    clickHeart: (postId) =>
      dispatch({
        payload: postId,
        type: "UPDATE_HEART",
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
