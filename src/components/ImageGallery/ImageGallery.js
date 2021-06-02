import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.scss';

const ImageGallery = ({ setLargeURL, images }) => (
  <ul className={style.ImageGallery}>
    <ImageGalleryItem images={images} setLargeURL={setLargeURL} />
  </ul>
);

export default ImageGallery;
