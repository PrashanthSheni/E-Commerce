const Sort = ({ setSortOrder }) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="">Sort</option>
      <option value="low">Low to High</option>
      <option value="high">High to Low</option>
    </select>
  );
};

export default Sort;