import { createStore } from "redux";

const initState = {
  view: 0,
  heart: -1,
  comment: 0,
  posts: [],
};

const reducers = function (state = initState, action) {
  switch (action.type) {
    case "UPDATE_POSTS":
      if (state.posts.length) {
        return state;
      }

      return { ...state, posts: action.payload };

    case "UPDATE_VIEW":
      return { ...state, view: action.payload };
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
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducers);
export default store;
