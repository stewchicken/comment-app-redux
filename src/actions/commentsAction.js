
import { DELETE_COMMENT, INIT_COMMNETS, ADD_COMMENT } from '../reducers/commentsReducer'
export function deleteComment(commentIndex) {
    /*
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ type: DELETE_COMMENT, commentIndex });
        }, 2000);
    })*/

    return {
        type: DELETE_COMMENT,
        //payload is default keyname for promise middlewhere
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(commentIndex);
            },2000);
        })
    };

    //return { type: DELETE_COMMENT, commentIndex }
    /*
    return dispatch => {
        //simulate a server which takes a couple of seconds
        setTimeout(() => {
            dispatch({
                type: DELETE_COMMENT,
                commentIndex
            });
        }, 2000);
    }*/
}

export function initComments(comments) {
    return { type: INIT_COMMNETS, comments }
}

export function addComment(comment) {
    return { type: ADD_COMMENT, comment }
}
