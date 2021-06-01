import React from 'react';
// import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ images, onOpenModal }) =>
  images.map(({ id, webformatURL, tags }) => (
    <li key={id} className={style.ImageGalleryItem}>
      <img
        onClick={onOpenModal}
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem__image}
      />
    </li>
  ));
export default ImageGalleryItem;
