const initialState={
  infostamps: [],
  isLoading: false,
  isLoaded: false,
  loadError: '',
}

export const loadInfostamps = () => ({
  type: LOAD_INFOSTAMPS_REQUEST,
});

export const LOAD_INFOSTAMPS_REQUEST = 'LOAD_INFOSTAMPS_REQUEST';
export const LOAD_INFOSTAMPS_SUCCESS = 'LOAD_INFOSTAMPS_SUCCESS';
export const LOAD_INFOSTAMPS_FAILURE = 'LOAD_INFOSTAMPS_FAILURE';

const listReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_INFOSTAMPS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      }
    }
    case LOAD_INFOSTAMPS_SUCCESS: {
      return {
        ...state,
        infostamps: action.infostamps,
        isLoading: false,
        isLoaded: true,
      }
    }
    case LOAD_INFOSTAMPS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        loadError: action.error,
      }
    }
    default: {
      return state;
    }
  }
}

export default listReducer;