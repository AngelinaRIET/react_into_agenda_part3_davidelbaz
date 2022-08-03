function Select({ handleChange, options }) {
  return (
    <select name="rows" onChange={handleChange}>
      {options.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}

export default Select;
