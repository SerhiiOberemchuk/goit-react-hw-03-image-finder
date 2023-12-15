import { Component } from 'react';
import { Button } from './components/Button/Button';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Searchbar } from './components/Searchbar/Searchbar';
// import axios from 'axios';
import Api from './Services/Api';

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const items = await Api.fetchGalleryItems('cat');
      this.setState(prevState => {
        return { articles: [...prevState.articles, ...items] };
      });
      console.log('items', items);
    } catch (error) {
      console.log('error', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery gallery={this.state.articles} />
        <Button />
      </div>
    );
  }
}
