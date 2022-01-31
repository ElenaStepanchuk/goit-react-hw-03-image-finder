import css from "./ImageGalleryItem.module.css";
import { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      this.props.renderPhotos &&
      this.props.renderPhotos.hits.map((hit) => (
        <li key={hit.id} className={css.galleryItem}>
          <img src={hit.webformatURL} alt="Gallery" />
        </li>
      ))
    );
  }
}
