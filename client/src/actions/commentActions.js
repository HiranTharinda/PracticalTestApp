
import axios from 'axios';
import { CREATE_COMMENT } from './types';

export const createComment = (data) => async dispatch => {
    const url = `/api/comments/create-comment`;
    try {
        await axios.post(url, data)
            .then(res =>
                dispatch({
                    type: CREATE_COMMENT,
                    payload: res.data,
                })
            )
    } catch (err) {
        console.log('error in creating comment')
    }
};

