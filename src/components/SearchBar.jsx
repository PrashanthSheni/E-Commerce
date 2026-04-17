const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for products, brands and more"
      className="form-control"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;