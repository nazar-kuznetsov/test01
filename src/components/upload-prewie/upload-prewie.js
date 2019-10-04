import React from 'react';
import {API_ROOT} from '../../middleware/api';
import './upload-prewie.scss';

const UploadPrewie = ({file, onClick, index}) => {

  const handleClick = () => {
    onClick(file, index);
  };

  return (
    <div onClick={handleClick} className="upload-prewie">
      {
        file.type === 'video/mp4' ?
          <div className="thumb-wrap">
            <video controls={true} src={`${API_ROOT}${file.path}`} />
          </div>
          : <img src={`${API_ROOT}${file.path}`}/>
      }
      {/* <img src={`${API_ROOT}${file.path}`}/> */}
    </div>
  );
};

export default UploadPrewie;
