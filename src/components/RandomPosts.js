import React from "react";
import { Link } from "react-router-dom";

export class RandomPosts extends React.Component {
  numberOfPost = 3;
  componentDidMount = () => { };

  shuffle = (posts) => {
    const newArray = Object.assign([], posts);
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };

  randomImage() {
    const num = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    return `/images/anh-${num}.jpg`;
  }


  render() {
    const posts = this.props.posts;
    const newPosts = this.shuffle(posts);
    let numberOfPost = 0;
    return (
      <>
        <section className="recomended-area section">
          <div className="container">
            <div className="row">
              {newPosts.map((item) => {
                numberOfPost++;
                return numberOfPost <= 3 ? (
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
                                className={
                                  item.isVoted === true ? "text-danger" : ""
                                }
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
                ) : (
                    false
                  );
              })}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
      </>
    );
  }
}
