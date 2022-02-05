import css from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  largeImageURL,
  onPhotoClick,
}) => {
  return (
    <li key={id} className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        largeimageurl={largeImageURL}
        className={css.imageGalleryItemImage}
        onClick={() => onPhotoClick(largeImageURL)}
      />
    </li>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.protoTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onPhotoClick: PropTypes.func,
};
