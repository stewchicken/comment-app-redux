// action types
export const INIT_COMMNETS = 'INIT_COMMNETS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function (state, action) {

  if (!state) {
    state = { comments: [] }
  }

  console.log("typeof: " + typeof action + " action = " + action)
  switch (action.type) {
    case INIT_COMMNETS:
      // 初始化评论
      return { comments: action.comments }
    case ADD_COMMENT: // for promise middleware append with _FULFILLED
      // 新增评论
      return {
        comments: [...state.comments, action.comment]
      }
      //for promise middleware must append with _FULFILLED
   // case DELETE_COMMENT+'_FULFILLED':
   case DELETE_COMMENT:   
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMNETS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}


