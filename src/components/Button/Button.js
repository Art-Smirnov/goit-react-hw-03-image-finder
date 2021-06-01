import React from 'react';
// import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} type="button" className={style.Button}>
    Load more
  </button>
);
export default Button;
