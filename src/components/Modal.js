import { Component } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
const modalWindow = document.querySelector("#modalRoot");
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalWindow
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func,
};
