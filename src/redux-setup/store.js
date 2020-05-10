import { createStore } from "redux";

const initState = {
    view: 0,
    heart: -1,
    comment: 0,
    posts: [],
    postItem: {},
    comments: [],
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

                        return { ...post, isVoted, heart: post.heart + heart};
                    }

                    return post;
                }),
            };
        case "UPDATE_COMMENT":
            return { ...state, comment: action.payload };
        case "POST_ITEM":
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (action.payload !== undefined && post.id === parseInt(action.payload)) {
                        console.log(post);
                        return { postItem: post };
                    }

                    return post;
                }),
            };
        case "UPDATE_COMMENTS":
            return {
                ...state, 
                posts: state.posts.map((post) => {
                    if(post.postId === parseInt(action.payload)) {
                        
                        return {...post}
                    }
                    return post
                })
            };
        default:
            return state;   
    }
};

const store = createStore(reducers);
export default store;
