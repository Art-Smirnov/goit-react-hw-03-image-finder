import React, { Component } from 'react';

import imageApi from '../services/imageApi';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Modal from '../components/Modal';
import Button from '../components/Button';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    error: null,
    currentPage: 1,
    query: '',
  };

  // componentDidMount() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onChangeQuery = serchQuery => {
    this.setState({ query: serchQuery });
    this.fetchImages();
  };

  fetchImages = () => {
    const { currentPage, query } = this.state;

    imageApi
      .fetchImagesWithQuery(query, currentPage)
      .then(images =>
        this.setState(prevState => ({
          images,
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    const { showModal, images, error } = this.state;
    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onOpenModal={this.toggleModal} />
        <Button onLoadMore={this.fetchImages} />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
