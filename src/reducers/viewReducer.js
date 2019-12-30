const initialState={
  imageUrl: '',
  isChanging: false,
  isChanged: false,
  changeError: '',
  mode: 'hidden',
  scroll: 0,
  selectedInfostamp: null,
};

export const urlToImage = (url, uid) => ({
  type: URL_TO_IMAGE_REQUEST,
  url,
  uid,
});

export const getImageUrl = (infostamp) => ({
  type: GET_IMAGE_URL,
  infostamp,
});

export const changeScroll = (scroll) => ({
  type: CHANGE_SCROLL,
  scroll,
})

export const selectInfostamp = (infostamp) => ({
  type: SELECT_INFOSTAMP,
  infostamp,
})

export const URL_TO_IMAGE_REQUEST = 'URL_TO_IMAGE_REQUEST';
export const URL_TO_IMAGE_SUCCESS = 'URL_TO_IMAGE_SUCCESS';
export const URL_TO_IMAGE_FAILURE = 'URL_TO_IMAGE_FAILURE';

export const GET_IMAGE_URL = 'GET_IMAGE_URL';
export const CHANGE_SCROLL = 'CHANGE_SCROLL';
export const SELECT_INFOSTAMP = 'SELECT_INFOSTAMP';

export const MODE_HIDDEN = 'MODE_HIDDEN';
export const MODE_SKETCH = 'MODE_SKETCH';
export const MODE_VIEWER = 'MODE_VIEWER';

const viewReducer = (state=initialState, action) => {
  switch (action.type) {
    case URL_TO_IMAGE_REQUEST: {
      return {
        ...state,
        isChanging: true,
        isChanged: false,
      }
    }
    case URL_TO_IMAGE_SUCCESS: {
      return {
        ...state,
        isChanging: false,
        isChanged: true,
        imageUrl: action.imageUrl,
      }
    }
    case URL_TO_IMAGE_FAILURE: {
      return {
        ...state,
        isChanging: false,
        isChanged: false,
        changeError: action.error,
      }
    }
    case GET_IMAGE_URL: {
      return {
        ...state,
        imageUrl:`http://localhost:3065/images/${action.infostamp.stamper._id}/${action.infostamp._id}.jpg`,
        scroll:action.infostamp.scroll,
      }
    }
    case CHANGE_SCROLL: {
      return {
        ...state,
        scroll: action.scroll,
      }
    }
    case SELECT_INFOSTAMP: {
      return {
        ...state,
        selectedInfostamp: action.infostamp,
      }
    }
    case MODE_HIDDEN: {
      return {
        ...state,
        mode: 'hidden',
      }
    }
    case MODE_SKETCH: {
      return {
        ...state,
        mode: 'sketch',
      }
    }
    case MODE_VIEWER: {
      return {
        ...state,
        mode: 'viewer',
      }
    }
    default: {
      return state;
    }
  }
}

export default viewReducer;