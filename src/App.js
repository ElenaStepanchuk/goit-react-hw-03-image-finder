import { Component } from "react";
import css from "./App.module.css";
import { ToastContainer } from "react-toastify";
import SearchBar from "./components/SearchBar";
import ImageGalleryItem from "./components/ImageGalleryItem";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

export default class App extends Component {
  state = {
    photos: "",
    id: "",
    largeImageUrl: "",
    page: 1,
    error: null,
    loading: false,
    // status: "idle",
  };
  componentDidUpdate(_, prevState) {
    if (this.state.name !== prevState.name) {
      this.setState({ loading: true, photos: "" });
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=24384103-764a450d164e25b7c6f60e4ce&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((photos) => this.setState({ photos }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  handleFormSubmit = (name) => {
    this.setState({ name });
  };
  handleChangePage = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
    fetch(
      `https://pixabay.com/api/?q=${this.state.name}&page=${
        this.state.page + 1
      }&key=24384103-764a450d164e25b7c6f60e4ce&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        return response.json();
      })
      .then((photos) => this.setState({ photos }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    // const renderPhotos = [...this.state.photos.hits];
    console.log(this.state.photos);
    // console.log(renderPhotos);
    // console.log(renderPhotos);
    // const { photos, page, status } = this.state;
    const { photos, page, loading, error } = this.state;
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <div className={css.gallery}>
          {error && <h2>Картинок с таким именем нет</h2>}
          {loading && <h2>Загружаем...</h2>}
          <ImageGallery>
            <ImageGalleryItem renderPhotos={photos} />
          </ImageGallery>
        </div>
        {photos && (
          <Button
            page={page}
            onChange={this.handleChangePage}
            photos={photos}
          />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
