const initialState={
  isSaving: false,
  isSaved: false,
  saveError: '',
  formData: {
    url: '',
    info: '',
    time: 0,
  },
}

export const saveInfostamp = (payload) => ({
  type: SAVE_INFOSTAMP_REQUEST,
  payload,
})

export const changeFormData = (infostamp) => ({
  type: CHANGE_FORM_DATA,
  payload: infostamp,
})

export const SAVE_INFOSTAMP_REQUEST = 'SAVE_INFOSTAMP_REQUEST';
export const SAVE_INFOSTAMP_SUCCESS = 'SAVE_INFOSTAMP_SUCCESS';
export const SAVE_INFOSTAMP_FAILURE = 'SAVE_INFOSTAMP_FAILURE';

export const CHANGE_ISSAVED = 'CHANGE_ISSAVED';

export const CHANGE_FORM_DATA = 'CHANGE_FORM_DATA';

const infostampReducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_FORM_DATA: {
      return {
        ...state,
        formData: action.payload,
        isSaved: false,
      }
    }
    case SAVE_INFOSTAMP_REQUEST: {
      return {
        ...state,
        isSaving: true,
        isSaved: false,
      }
    }
    case SAVE_INFOSTAMP_SUCCESS: {
      return {
        ...state,
        isSaving: false,
        isSaved: true,
      }
    }
    case SAVE_INFOSTAMP_FAILURE: {
      return {
        ...state,
        isSaving: false,
        isSaved: false,
        saveError: action.error,
      }
    }
    default: {
      return state;
    }
  }
}

export default infostampReducer;