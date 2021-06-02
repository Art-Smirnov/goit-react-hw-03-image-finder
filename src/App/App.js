import React, { Component } from 'react';

import imageApi from '../services/imageApi';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Loader from '../components/Spiner';

import style from './App.module.scss';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    error: null,
    currentPage: 1,
    query: '',
    isLoading: false,
  };

  // componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onChangeQuery = serchQuery => {
    this.setState({
      query: serchQuery,
      currentPage: 1,
      images: [],
      error: null,
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
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { showModal, images, error, isLoading } = this.state;
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;
    return (
      <div className={style.App}>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onOpenModal={this.toggleModal} />
        <Loader isLoading={isLoading} />
        {shouldRenderLoadMoreBtn && <Button onLoadMore={this.fetchImages} />}
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
