export const Button = ({ handleNextPage }) => {
  return (
    <button
      className="Button"
      type="button"
      aria-label="button"
      onClick={handleNextPage}
    >
      Load more
    </button>
  );
};
