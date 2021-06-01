import React from 'react';
// import PropTypes from 'prop-types';

import style from './Searchbar.module.scss';

const Searchbar = () => (
  <header className={style.Searchbar}>
    <form className={style.SearchForm}>
      <button type="submit" className={style.SearchForm__button}>
        <span className={style.SearchForm__button__label}>Search</span>
      </button>

      <input
        className={style.SearchForm__input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
