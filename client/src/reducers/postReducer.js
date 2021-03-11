import { CREATE_COMMENT, CREATE_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
    posts: [],
    updated: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                posts: action.payload,
                updated: false
            };
        case CREATE_POST:
            return {
                updated: true
            };

        case CREATE_COMMENT:
            return {
                updated: true
            };
        default:
            return state;
    }
}