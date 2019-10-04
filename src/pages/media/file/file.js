import React from 'react';

export default ({image, selected, index}) => {
    const handleClick = () => {
        selected(image, index);
    };

    return (
        <li className="item" onClick={handleClick}>
            <img
                src={image.path.replace('../public', '')}
                alt={image.alt}
            />
        </li>
    );
};
