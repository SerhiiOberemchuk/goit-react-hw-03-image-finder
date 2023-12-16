import { Component } from 'react';

export class Modal extends Component {
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
  render() {
    const { imageURL } = this.props;
    return (
      <div
        className="Overlay"
        onClick={() => {
          this.props.handleCloseModal();
        }}
      >
        <div className="Modal">
          <img src={imageURL} alt="" />
        </div>
      </div>
    );
  }
}
