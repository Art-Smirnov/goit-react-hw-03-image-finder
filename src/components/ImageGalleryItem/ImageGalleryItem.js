import React from 'react';
// import PropTypes from 'prop-types';

import './ImageGalleryItem.scss';
const ImageGalleryItem = ({ onOpenModal }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={onOpenModal}
      src=""
      alt=""
      className="ImageGalleryItem-image"
    />
  </li>
);
export default ImageGalleryItem;
