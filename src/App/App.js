import React, { Component } from 'react';

import imageApi from '../services/imageApi';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Spiner from '../components/Spiner';

import style from './App.module.scss';

class App extends Component {
  state = {
    images: [],
    error: null,
    currentPage: 1,
    query: '',
    isLoading: false,
    largeURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
    if (this.state.currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  setLargeURL = largeURL => {
    this.setState({ largeURL });
  };

  onChangeQuery = serchQuery => {
    this.setState({
      query: serchQuery,
      currentPage: 1,
      images: [],
      error: null,
      largeURL: '',
    });
  };

  fetchImages = () => {
    const { currentPage, query } = this.state;
    const options = { query, currentPage };

    this.setState({ isLoading: true });

    imageApi
      .fetchImagesWithQuery(options)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        return this.setState({ isLoading: false });
      });
  };

  render() {
    const { largeURL, images, error, isLoading } = this.state;
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;
    return (
      <div className={style.App}>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} setLargeURL={this.setLargeURL} />
        <Spiner isLoading={isLoading} />
        {shouldRenderLoadMoreBtn && <Button onLoadMore={this.fetchImages} />}
        {largeURL && (
          <Modal setLargeURL={this.setLargeURL}>
            <img src={largeURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
