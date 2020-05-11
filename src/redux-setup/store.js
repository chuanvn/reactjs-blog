import { createStore } from "redux";

const initState = {
  view: 0,
  heart: -1,
  comment: 0,
  posts: [],
  comments: [],
};

const reducers = function (state = initState, action) {
  switch (action.type) {
    case "UPDATE_POSTS":
      if (state.posts.length) {
        return state;
      }

      return { ...state, posts: action.payload };

    case "UPDATE_HEART":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload) {
            let isVoted = true;
            let heart = 1;
            if (post.isVoted) {
              isVoted = false;
              heart = -1;
            }
            return { ...post, isVoted, heart: post.heart + heart };
          }

          return post;
        }),
      };
    case "UPDATE_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            console.log(action.payload);
            let comments = action.payload.comments;
            let commentCount = comments.length;

            return { ...post, comments, comment: commentCount };
          }

          return post;
        }),
      };

    case "UPDATE_VIEW":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === +action.payload) {
            return { ...post, view: post.view + 1 };
          }

          return post;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducers);
export default store;
