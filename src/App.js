import { Component } from "react";
import css from "./App.module.css";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./components/SearchBar";
import FetchPhotos from "./helpers/FetchPhotos";
import FetchPhotosAddMore from "./helpers/FetchPhotosAddMore";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
export default class App extends Component {
  state = {
    photos: [],
    id: "",
    largeImageURL: "",
    page: 1,
    error: null,
    loading: false,
    showModal: false,
  };
  componentDidUpdate(_, prevState) {
    const { name } = this.state;
    const prevStateName = prevState.name;
    const nextStateName = name;
    if (nextStateName !== prevStateName) {
      this.setState({ loading: true, photos: [] });
      this.getPhotoFetch();
    }
  }
  handleFormSubmit = (name) => {
    this.setState({ name });
  };
  getPhotoFetch = () => {
    const { name, page } = this.state;
    FetchPhotos(name, page)
      .then((photos) => {
        if (photos.hits.length === 0) {
          toast(`фотографии или рисунка с именем ${name} не найдено!`, {
            position: "top-center",
          });
        }
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...photos.hits],
        }));
        this.scroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleChangePage = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
    const { name, page } = this.state;
    FetchPhotosAddMore(name, page)
      .then((photos) => {
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...photos.hits],
        }));
        this.scroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: "",
    }));
  };
  handleClickPhoto = (largeImageURL) => {
    this.setState({ largeImageURL, showModal: true });
  };
  scroll = () => {
    window.scrollBy({
      top: 2000,
      behavior: "smooth",
    });
  };
  render() {
    const { photos, page, loading, showModal, largeImageURL } = this.state;
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <div className={css.gallery}>
          {loading && <Loader />}
          <ImageGallery photos={photos} onPhotoClick={this.handleClickPhoto} />
        </div>
        {photos.length > 0 && (
          <Button
            page={page}
            onChange={this.handleChangePage}
            photos={photos}
          />
        )}
        {showModal && (
          <Modal onClose={this.togleModal}>
            <img src={largeImageURL} alt="Увеличено текущее фото" />
          </Modal>
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
