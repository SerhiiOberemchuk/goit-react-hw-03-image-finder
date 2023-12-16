import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';

export class Modal extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }
  handleCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.handleCloseModal();
    }
  };

  handleImageLoad = () => {
    this.setState({ isLoading: false });
  };
  render() {
    const { imageURL } = this.props;
    const { isLoading } = this.state;
    return (
      <div
        className="Overlay"
        onClick={() => {
          this.props.handleCloseModal();
        }}
      >
        <div className="Modal">
          {isLoading && <Loader />}
          <img
            src={imageURL}
            alt=""
            onLoad={this.handleImageLoad}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      </div>
    );
  }
}
