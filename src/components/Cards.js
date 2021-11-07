import React from "react";
import Card from "./Card";
import imagen1 from "../assets/image1.jpeg";
import imagen2 from "../assets/image2.jpeg";
import imagen3 from "../assets/image3.jpeg";

const cards = [
  {
    id: "1",
    title: "Google",
    imagen: imagen1,
    url:"https://www.google.es/",
    parrafo:"Visit Google"
    
  },
  {
    id: "2",
    title: "Instagram",
    imagen: imagen2,
    url:"https://www.instagram.com/?hl=es",
    parrafo:"Visit Instagram"
  },
  {
    id: "3",
    title: "infojobs",
    imagen: imagen3,
    url:"https://www.infojobs.net/",
    parrafo:"Visit Infojobs"
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100  ">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.imagen} enlaceUrl={card.url} textContent={card.parrafo}/>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
