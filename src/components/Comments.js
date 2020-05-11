import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      body: "",
    };
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, body } = this.state;
    if (name === "" || email === "" || body === "") {
      alert("Nhập thiếu thông tin, vui lòng nhập lại");
    } else {
      const comment = {
        name,
        email,
        body,
      };
      this.props.addNewComment(comment);
      this.setState({
        name: "",
        email: "",
        body: "",
      });
      alert("Thêm bình luận thành công!");
    }
  };

  render() {
    let comments = [];
    if (this.props.comments) {
      comments = this.props.comments;
    }
    return (
      <section className="comment-section">
        <div className="container">
          <h4>
            <b>POST COMMENT</b>
          </h4>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="comment-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        aria-required="true"
                        name="contact-form-name"
                        className="form-control"
                        placeholder="Enter your name"
                        aria-invalid="true"
                        required
                        onChange={(e) => this.handleChange(e, "name")}
                        value={this.state.name}
                      />
                    </div>
                    {/* col-sm-6 */}
                    <div className="col-sm-6">
                      <input
                        type="email"
                        aria-required="true"
                        name="contact-form-email"
                        className="form-control"
                        placeholder="Enter your email"
                        aria-invalid="true"
                        required
                        onChange={(e) => this.handleChange(e, "email")}
                        value={this.state.email}
                      />
                    </div>
                    {/* col-sm-6 */}
                    <div className="col-sm-12">
                      <textarea
                        name="contact-form-message"
                        rows={2}
                        className="text-area-messge form-control"
                        placeholder="Enter your comment"
                        aria-required="true"
                        aria-invalid="false"
                        defaultValue={""}
                        required
                        onChange={(e) => this.handleChange(e, "body")}
                        value={this.state.body}
                      />
                    </div>
                    {/* col-sm-12 */}
                    <div className="col-sm-12">
                      <button
                        className="submit-btn"
                        type="submit"
                        id="form-submit"
                      >
                        <b>POST COMMENT</b>
                      </button>
                    </div>
                    {/* col-sm-12 */}
                  </div>
                  {/* row */}
                </form>
              </div>
              {/* comment-form */}
              <h4>
                <strong>COMMENTS({comments.length})</strong>
              </h4>
              <div className="commnets-area">
                {comments.map((comment) => {
                  return (
                    <div className="comment" key={comment.id}>
                      <div className="post-info">
                        <div className="left-area">
                          <Link className="avatar" to="">
                            <img src="/images/800x800.png" alt="Profile" />
                          </Link>
                        </div>

                        <div className="middle-area">
                          <Link className="name" to="">
                            <strong>{comment.email}</strong>
                          </Link>
                          <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                        </div>
                      </div>

                      <p>{comment.body}</p>
                    </div>
                  );
                })}
              </div>
              {/* commnets-area */}
            </div>
            {/* col-lg-8 col-md-12 */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
    );
  }
}
