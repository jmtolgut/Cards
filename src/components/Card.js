import PropTypes from 'prop-types';
import styled from "styled-components";

function Card({ title, imageSource, enlaceUrl, textContent }) {
  return (
    <ContCard className="card text-center bg-dark animate__animated animate__fadeInUp">
      <ContImg className="overFlow">
        <Img src={imageSource} alt="Imagen no encontrada" className="card-img-top" />
      </ContImg>
      <div className="card-body">
        <h4 className="card-title text-light">{title}</h4>
        <p className="card-text text-white-50">
          {textContent ? textContent : "Error en texto"}
        </p>
        <a
          href={enlaceUrl}
          className="btn btn-outline-light btn-sm round-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Website
        </a>
      </div>
    </ContCard>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  enlaceUrl: PropTypes.string,
  imageSource: PropTypes.string,
  textContent: PropTypes.string
}
export default Card;

const ContCard = styled.div`
border-radius: 1rem;
overflow: hidden;

&:hover{
  box-shadow: 5px 10px 20px 3px rgba(255, 255, 255, 0.3)!important;
  transition: all 0.5s linear;
}
`

const ContImg = styled.div`
border-radius: 0rem 0rem 1rem 1rem;
box-shadow: 0px 10px 10px 3px rgba(0,0,0,0.9);
overflow: hidden;

`
const Img = styled.img`
&:hover{
transform: scale(1.5);
transition: all 0.5s linear;
}
`