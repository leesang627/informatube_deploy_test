const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isLoggingOut: false,
  logInError: '',
  logOutError: '',
  loadUserError: '',
  me: null,
}

export const logIn = (name) => ({
  type: LOG_IN_REQUEST,
  name: name,
})

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true, 
        me: action.user,
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        logInError: action.error,
        me: null,
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      }
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false, 
        me: null,
      }
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: true,
        logOutError: action.error,
      }
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state,
      }
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        me: action.user,
      }
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state,
        loadUserError: action.error,
      }
    }
    default: {
      return state;
    }
  }
}

export default userReducer;