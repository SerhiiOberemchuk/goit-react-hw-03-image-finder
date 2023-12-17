import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchGalleryItems } from 'Services/Api';
import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import css from './imageGalery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true, images: [] });
      this.fetchImages();
    } else if (prevProps.pages !== this.props.pages) {
      this.setState({ isLoading: true });
      this.fetchImages();
    }
  }

  fetchImages = () => {
    fetchGalleryItems(this.props.searchText, this.props.pages)
      .then(response => {
        this.props.updateHasImages(response.data.hits.length > 0);
        if (!response.data.hits.length) {
          Swal.fire({
            title: 'Hmm...',
            text: "If you don't know what you want, I'm not sure what to show you!",
            icon: 'question',
            backdrop: true,
            confirmButtonText: 'Try again?',
          });
        } else {
          this.setState(prevState => {
            return { images: [...prevState.images, ...response.data.hits] };
          });
        }
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Not cool (((',
        });
        console.error(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        {images.length > 0 && (
          <>
            <ul className={css.ImageGallery}>
              {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                  openModal={this.props.openModal}
                  key={uuidv4()}
                  tags={tags}
                  id={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                />
              ))}
            </ul>
          </>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}
