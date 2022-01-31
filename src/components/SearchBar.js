import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ImSearch } from "react-icons/im";
import css from "./SerchBar.module.css";
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
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
            <ImSearch />
          </button>
          <input
            className={css.input}
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
