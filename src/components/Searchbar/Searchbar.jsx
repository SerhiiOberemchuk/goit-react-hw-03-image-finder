import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';

export class Searchbar extends Component {
  state = {
    value: '',
    pages: 1,
  };
  handleSubmit = e => {
    e.preventDefault();
    const { value, pages } = this.state;
    if (value === '') {
      Swal.fire({
        title: 'Oops...',
        text: "Seems like your search term got lost in the keyboard jungle! Let's try to find it again.",
        icon: 'question',
        backdrop: true,
        confirmButtonText: 'Back to the Search Safari!',
      });
      return;
    }
    if (this.props.searchText === this.state.value) {
      Swal.fire({
        title: 'Deja Vu!',
        text: "Looks like you've already searched this! Are you testing your keyboard or just really love these results?",
        icon: 'wink',
        backdrop: true,
        confirmButtonText: 'Search Again Anyway',
      });
      this.setState({ value: '' });
      return;
    }
    this.props.handleSearchText(value, pages);
    e.target.reset();
    this.setState({ value: '' });
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={e => this.handleSubmit(e)}>
          <button type="submit" className="SearchForm-button">
            <FaSearch />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            name="search"
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
