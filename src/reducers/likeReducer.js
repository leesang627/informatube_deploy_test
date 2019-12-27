const initialState = {
  isLiking: false,
  isLiked: false,
  likeError: '',
  isDisliking: false,
  isDisliked: false,
  dislikeError: '',
  isCancelingLike: false,
  isCanceledLike: false,
  cancelLikeError: '',
  isCancelingDislike: false,
  isCanceledDislike: false,
  cancelDislikeError: '',
  log: '',
}

export const like = (uid, iid) => ({
  type: LIKE_REQUEST,
  uid,
  iid,
});

export const dislike = (uid, iid) => ({
  type: DISLIKE_REQUEST,
  uid,
  iid,
});

export const cancelLike = (uid, iid) => ({
  type: CANCEL_LIKE_REQUEST,
  uid,
  iid,
});

export const cancelDislike = (uid, iid) => ({
  type: CANCEL_DISLIKE_REQUEST,
  uid,
  iid,
});

export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

export const DISLIKE_REQUEST = 'DISLIKE_REQUEST';
export const DISLIKE_SUCCESS = 'DISLIKE_SUCCESS';
export const DISLIKE_FAILURE = 'DISLIKE_FAILURE';

export const CANCEL_LIKE_REQUEST = 'CANCEL_LIKE_REQUEST';
export const CANCEL_LIKE_SUCCESS = 'CANCEL_LIKE_SUCCESS';
export const CANCEL_LIKE_FAILURE = 'CANCEL_LIKE_FAILURE';

export const CANCEL_DISLIKE_REQUEST = 'CANCEL_DISLIKE_REQUEST';
export const CANCEL_DISLIKE_SUCCESS = 'CANCEL_DISLIKE_SUCCESS';
export const CANCEL_DISLIKE_FAILURE = 'CANCEL_DISLIKE_FAILURE';

const likeReducer = (state=initialState, action) => {
  switch(action.type) {
    case LIKE_REQUEST: {
      return {
        ...state,
        isLiking: true,
        isLiked: false,
      }
    }
    case LIKE_SUCCESS: {
      return {
        ...state,
        isLiking: false,
        isLiked: true,
        log: action.log,
      }
    }
    case LIKE_FAILURE: {
      return {
        ...state,
        isLiking: false,
        isLiked: false,
        likeError: action.error,
      }
    }
    case DISLIKE_REQUEST: {
      return {
        ...state,
        isDisliking: true,
        isDisliked: false,
      }
    }
    case DISLIKE_SUCCESS: {
      return {
        ...state,
        isDisliking: false,
        isDisliked: true,
        log: action.log,
      }
    }
    case DISLIKE_FAILURE: {
      return {
        ...state,
        isDisliking: false,
        isDisliked: false,
        dislikeError: action.error,
      }
    }
    case CANCEL_LIKE_REQUEST: {
      return {
        ...state,
        isCancelingLike: true,
        isCanceledLike: false,
      }
    }
    case CANCEL_LIKE_SUCCESS: {
      return {
        ...state,
        isCancelingLike: false,
        isCanceledLike: true,
        log: action.log,
      }
    }
    case CANCEL_LIKE_FAILURE: {
      return {
        ...state,
        isCancelingLike: false,
        isCanceledLike: false,
        cancelLikeError: action.error,
      }
    }
    case CANCEL_DISLIKE_REQUEST: {
      return {
        ...state,
        isCancelingDislike: true,
        isCanceledDislike: false,
      }
    }
    case CANCEL_DISLIKE_SUCCESS: {
      return {
        ...state,
        isCancelingDislike: false,
        isCanceledDislike: true,
        log: action.log,
      }
    }
    case CANCEL_DISLIKE_FAILURE: {
      return {
        ...state,
        isCancelingDislike: false,
        isCanceledDislike: false,
        cancelDislikeError: action.error,
      }
    }
    default: {
      return state;
    }
  }
}

export default likeReducer;