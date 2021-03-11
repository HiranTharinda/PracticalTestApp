import { FETCH_POSTS, CREATE_POST } from './types';
import axios from 'axios';

export const createPost = (data) => async dispatch => {
    const url = `/api/posts/create-post`;
    try {
        await axios.post(url, data)
            .then(res =>
                dispatch({
                    type: CREATE_POST,
                    payload: res.data,
                })
            )
    } catch (err) {
        console.log('error in fetch')
    }
};

export const getPosts = () => async dispatch => {
    const url = `/api/posts/get-posts`;
    try {
        const request = await axios.get(url)
            .then(res =>
                dispatch({
                    type: FETCH_POSTS,
                    payload: res.data,
                })
            )
    } catch (err) {
        console.log('error in fetch')
    }
};

