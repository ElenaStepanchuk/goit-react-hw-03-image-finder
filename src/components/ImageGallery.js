import css from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
const ImageGallery = ({ photos, onPhotoClick }) => {
  return (
    <ul className={css.imageGallery}>
      {photos.map((photo) => {
        return (
          <ImageGalleryItem
            key={photo.id}
            webformatURL={photo.webformatURL}
            largeImageURL={photo.largeImageURL}
            onPhotoClick={onPhotoClick}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;
