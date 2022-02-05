import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";
import css from "./SerchBar.module.css";
import PropTypes from "prop-types";
export default class SearchBar extends Component {
  state = {
    name: "",
  };
  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim() === "") {
      return toast("Введите имя фото!", {
        position: "top-center",
      });
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <header className={css.searchBar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
            <ImSearch />
          </button>
          <input
            className={css.searchFormInput}
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};
