import css from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ page, onChange }) => {
  return (
    <button type="submit" className={css.button} onClick={() => onChange(page)}>
      Load more
    </button>
  );
};
export default Button;
Button.protoTypes = {
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
