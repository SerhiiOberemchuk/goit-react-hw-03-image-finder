import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <li
        className="ImageGalleryItem"
        onClick={() => this.props.openModal(largeImageURL)}
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
  }
}
