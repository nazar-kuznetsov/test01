import {
  ADMIN_MEDIA_FETCH_SUCCESS,
  ADMIN_MEDIA_DELETE_SUCCESS,
  ADMIN_MEDIA_UPLOAD_SUCCESS,
  ADMIN_MEDIA_ALT_CHANGE_SUCCESS
} from './constants';

const initialState = {
  mediaFiles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_MEDIA_FETCH_SUCCESS: {
      return {
        ...state,
        mediaFiles: action.payload
      };
    }
    case ADMIN_MEDIA_UPLOAD_SUCCESS: {
      return {
        ...state,
        mediaFiles: [...action.payload.data, ...state.mediaFiles]
      };
    }
    case ADMIN_MEDIA_DELETE_SUCCESS: {
      return {
        ...state,
        mediaFiles: state.mediaFiles.filter(file => file._id !== action.payload)
      };
    }
    case ADMIN_MEDIA_ALT_CHANGE_SUCCESS: {
      return {
        ...state,
        mediaFiles: state.mediaFiles.map(file => {
          if (file._id === action.payload.id) {
            file.alt = action.payload.alt;
            return file;
          }
          return file;
        })
      };
    }
    default: return state;
  }
};

