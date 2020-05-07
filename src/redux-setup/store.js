import { createStore } from 'redux';

const initState = {
    view: 0,
    heart: -1,
    comment: 0,
}

const reducers = function (state = initState, action) {
    switch (action.type) {
        case 'UPDATE_VIEW':
            return { ...state, view: action.payload }
        case 'UPDATE_HEART':
            return { ...state, heart: action.payload }
        case 'UPDATE_COMMENT':
            return { ...state, comment: action.payload }
        default:
            return state
    }
}

const store = createStore(reducers);
export default store;