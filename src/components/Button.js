const Button = ({ photos, page, onChange }) => {
  return (
    photos && (
      <button type="submit" onClick={() => onChange(page)}>
        Load more
      </button>
    )
  );
};
export default Button;
