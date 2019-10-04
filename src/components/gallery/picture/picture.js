import React, {useState} from 'react';
// import styled from 'styled-components';
// import { url } from '../../../../';

// const Picture = styled.div`
//   border: 2px solid ${props => (props.selected ? 'red' : 'transparent')};
//   padding: 5px;
//   img {
//     cursor: pointer;
//     height: 150px;
//     object-fit: cover;
//   }
// `;

export default React.memo(({image, addSelected}) => {
  const [selected, setSelected] = useState(false);

  const Select = () => {
    setSelected(!selected);
    addSelected(image._id);
  };

  return (
    // <Picture  selected={selected}>
    <img onClick={Select} src={url(image.path)} alt=""/>
    // </Picture>
  );
});
