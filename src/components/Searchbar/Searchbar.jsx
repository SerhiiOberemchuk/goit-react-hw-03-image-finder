import { FaSearch } from 'react-icons/fa';
export const Searchbar = () => {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <FaSearch />
          {/* <span className="SearchForm-button-label"></span> */}
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
