const Button = ({ page, onChange }) => {
  return (
    <button type="submit" onClick={() => onChange(page)}>
      Load more
    </button>
  );
};
export default Button;
