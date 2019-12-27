const initialState = {
  isAddingUser: false,
  addUserError: '',
  isAddedUser: false,
  me: null,
  //me: {name: 'hello', _id: '5dfc8624479b93057264c19c'}, //dummy
}

export const addUser = (name) => ({
  type: ADD_USER_REQUEST,
  name: name,
})

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST: {
      return {
        ...state,
        isAddingUser: true,
        isAddedUser: false,
      }
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        isAddingUser: false,
        isAddedUser: true, 
        me: action.user,
      }
    }
    case ADD_USER_FAILURE: {
      return {
        ...state,
        isAddingUser: false,
        isAddedUser: false,
        addUserError: action.error,
        me: null,
      }
    }
    default: {
      return state;
    }
  }
}

export default userReducer;