const initialState = {
  playing: false,
};

export const PLAY_PLAYER = 'PLAY_PLAYER';
export const PAUSE_PLAYER = 'PAUSE_PLAYER';

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case PLAY_PLAYER: {
      return {
        ...state,
        playing: true,
      }
    }
    case PAUSE_PLAYER: {
      return {
        ...state,
        playing: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default playerReducer;