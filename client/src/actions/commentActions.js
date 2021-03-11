
import axios from 'axios';

export const createComment = (data) => async dispatch => {
    const url = `/api/comments/create-comment`;
    try {
        await axios.post(url, data);
    } catch (err) {
        console.log('error in creating comment')
    }
};

