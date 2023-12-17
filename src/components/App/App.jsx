import { Component } from 'react';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Modal } from 'components/Modal/Modal';
import css from './app.module.css';
export class App extends Component {
  state = {
    searchText: '',
    pages: 1,
    hasImages: false,
    isModal: false,
    imageURL: '',
  };
  handleSearchText = (searchText, pages) => {
    this.setState({ searchText, pages });
  };
  handleNextPage = () => {
    this.setState(prevState => {
      return { pages: prevState.pages + 1 };
    });
  };
  updateHasImages = hasImages => {
    this.setState({ hasImages });
  };

  openModal = imageURL => {
    this.setState({ imageURL, isModal: true });
  };
  handleCloseModal = () => {
    this.setState({ imageURL: '', isModal: false });
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar
          handleSearchText={this.handleSearchText}
          searchText={this.state.searchText}
        />
        <ImageGallery
          searchText={this.state.searchText}
          pages={this.state.pages}
          updateHasImages={this.updateHasImages}
          openModal={this.openModal}
        />
        {this.state.searchText && this.state.hasImages && (
          <Button handleNextPage={this.handleNextPage} />
        )}
        {this.state.isModal && (
          <Modal
            imageURL={this.state.imageURL}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
