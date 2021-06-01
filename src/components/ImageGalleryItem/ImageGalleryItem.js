import React from 'react';
// import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.scss';
const ImageGalleryItem = ({ onOpenModal }) => (
  <li className={style.ImageGalleryItem}>
    <img
      onClick={onOpenModal}
      src=""
      alt=""
      className={style.ImageGalleryItem__image}
    />
  </li>
);
export default ImageGalleryItem;
