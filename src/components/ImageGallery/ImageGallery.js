import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.scss';
const ImageGallery = ({ onOpenModal }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem onOpenModal={onOpenModal} />
  </ul>
);
export default ImageGallery;
