import PropTypes from "prop-types";
const FetchPhotos = (nextStateName, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${nextStateName}&page=${page}&key=24384103-764a450d164e25b7c6f60e4ce&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Error`));
  });
};
export default FetchPhotos;
FetchPhotos.protoTypes = {
  page: PropTypes.number.isRequired,
  nextStateName: PropTypes.string.isRequired,
};
