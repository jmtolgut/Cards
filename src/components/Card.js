import React from "react";
import PropTypes from 'prop-types';
import "./cards.css";
function Card({ title, imageSource, enlaceUrl, textContent }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overFlow">
      <img src={imageSource} alt="" className="card-img-top"/>
      </div>
      <div className="card-body">
        <h4 className="card-title text-light">{title}</h4>
        <p className="card-text text-white-50">
          {textContent ? textContent : "Error en texto"}
        </p>
        <a
          href={enlaceUrl}
          className="btn btn-outline-light round-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Website
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string,
  imageSource:PropTypes.string

}
export default Card;
