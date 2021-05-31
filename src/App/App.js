import React, { Component } from 'react';

import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Modal from '../components/Modal';

class App extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery onOpenModal={this.toggleModal} />
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
