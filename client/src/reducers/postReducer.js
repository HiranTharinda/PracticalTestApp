import { FETCH_POSTS } from '../actions/types';

const initialState = {
    posts: [],
}

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case FETCH_POSTS:
            return {
                posts: action.payload
            };
        default:
            return state;
    }
}