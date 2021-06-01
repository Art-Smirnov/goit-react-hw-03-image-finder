import React from 'react';

// import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.scss';

const ImageGallery = ({ onOpenModal }) => (
  <ul className={style.ImageGallery}>
    <ImageGalleryItem onOpenModal={onOpenModal} />
  </ul>
);
export default ImageGallery;
