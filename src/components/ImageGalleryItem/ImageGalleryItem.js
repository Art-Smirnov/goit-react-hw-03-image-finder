import React from 'react';
import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ images, setLargeURL }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className={style.ImageGalleryItem}>
      <img
        onClick={() => setLargeURL(largeImageURL)}
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem__image}
      />
    </li>
  ));

ImageGalleryItem.propTypes = {
  setLargeURL: PropTypes.func.isRequired,

  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
};
export default ImageGalleryItem;
