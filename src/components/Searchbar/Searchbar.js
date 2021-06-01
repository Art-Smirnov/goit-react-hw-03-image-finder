import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import style from './Searchbar.module.scss';

class Searchbar extends Component {
  state = { serchQuery: '' };

  handleChange = e => {
    this.setState({ serchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.serchQuery);

    this.setState({ serchQuery: '' });
  };

  render() {
    const { serchQuery } = this.state;
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            value={serchQuery}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
