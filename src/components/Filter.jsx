const Filter = ({ setMinPrice, setMaxPrice }) => {
  return (
    <div className="d-flex gap-2 mb-3">
      <input
        type="number"
        placeholder="Min"
        className="form-control"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max"
        className="form-control"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;