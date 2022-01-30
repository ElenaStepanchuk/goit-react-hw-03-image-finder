import { Component } from "react";
import css from "./App.module.css";
import { ToastContainer } from "react-toastify";
import SearchBar from "./components/SearchBar";
// import ImageGalleryItem from "./components/ImageGalleryItem";

export default class App extends Component {
  state = {
    name: "",
    imagePhoto: "",
  };
  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=cat&page=1&key=24384103-764a450d164e25b7c6f60e4ce&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((imagePhoto) => this.setState({ imagePhoto }));
  }
  handleFormSubmit = (name) => {
    this.setState({ name });
  };

  render() {
    console.log(this.state.imagePhoto.hits);
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <div className="gallery">
          <ul>
            {/* <ImageGalleryItem ArrayPhotos={this.state.imagePhoto} /> */}
            {this.state.imagePhoto &&
              this.state.imagePhoto.hits.map((hit) => (
                <li key={hit.id}>
                  <img src={hit.webformatURL} alt="Gallery" />
                </li>
              ))}
          </ul>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
