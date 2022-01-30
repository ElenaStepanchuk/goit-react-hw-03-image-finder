import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";
export default class Searchbar extends Component {
  state = {
    name: "",
  };
  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=cat&page=1&key=24384103-764a450d164e25b7c6f60e4ce&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((img) => this.setState({ img }));
  }
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
      <header className="searchBar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="buttonLabel">Search</span>
            <ImSearch />
          </button>

          <input
            className="input"
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
