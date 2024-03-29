import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({ title, paragraph, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
