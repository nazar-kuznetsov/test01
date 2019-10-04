import api from '../../../middleware/api';

import {
  ADMIN_MEDIA_FETCH_REQUEST,
  ADMIN_MEDIA_FETCH_SUCCESS,
  ADMIN_MEDIA_ALT_CHANGE_SUCCESS,
  ADMIN_MEDIA_UPLOAD_SUCCESS,
  ADMIN_MEDIA_UPLOAD_REQUEST,
  ADMIN_MEDIA_DELETE_REQUEST
} from './constants';

// export const fetchImages = () => ({
//   type: ADMIN_MEDIA_FETCH_REQUEST
// });

// export const uploadImages = images => ({
//   type: ADMIN_MEDIA_UPLOAD_REQUEST,
//   payload: images
// });

// Загрузить изображение
export const upload = files => async dispatch => {
  const {data} = await api.post('upload', files);
  if (data.success) {
    dispatch({ type: ADMIN_MEDIA_UPLOAD_SUCCESS, payload: data });
  }
};


// export const altImages = (id, alt) => ({
//   type: ADMIN_MEDIA_ALT_CHANGE_REQUEST,
//   payload: { id, alt }
// });

// export const deleteImages = id => ({
//   type: ADMIN_MEDIA_DELETE_REQUEST,
//   payload: id
// });

// Загрузить изображение файлы
export const deleteImages = id => async dispatch => {
  // const response = await api.get('upload');
  console.log(id);
  // dispatch({ type: ADMIN_MEDIA_FETCH_REQUEST });
  // const response = await api.get('upload');
  // dispatch({ type: ADMIN_MEDIA_FETCH_SUCCESS, payload: response.data });
};


// Загрузить изображение файлы
export const fetchImages = () => async dispatch => {
  dispatch({ type: ADMIN_MEDIA_FETCH_REQUEST });
  const response = await api.get('upload');
  dispatch({ type: ADMIN_MEDIA_FETCH_SUCCESS, payload: response.data });
};

// Альт для изображение
export const altImages = (id, alt) => async dispatch => {
  await api.put(`upload/${id}`, { alt });
  dispatch({ type: ADMIN_MEDIA_ALT_CHANGE_SUCCESS, payload: { id, alt } });
};
