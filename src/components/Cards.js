import React from "react";
import Card from "./Card";
import Google from "../assets/Google.jpg";
import Github from "../assets/Github.jpg";
import Infojobs from "../assets/Infojobs.jpg";
import Linkedin from "../assets/Linkedin.jpg";

const cards = [
  {
    id: "1",
    title: "Google",
    imagen: Google,
    url:"https://www.google.es/",
    parrafo:"Visit Google"
    
  },
  {
    id: "2",
    title: "Github",
    imagen: Github,
    url:"https://github.com/jmtolgut",
    parrafo:"My Github Profile"
  },
  {
    id: "3",
    title: "infojobs",
    imagen: Infojobs,
    url:"http://www.infojobs.net/josemanuel-toledo-gutierrez.prf",
    parrafo:"My Infojobs Profile"
  },
  {
    id: "4",
    title: "Linkedin",
    imagen: Linkedin,
    url:"https://www.linkedin.com/in/jos%C3%A9-manuel-toledo-guti%C3%A9rrez-9659541b3/",
    parrafo:"My Linkedin Profile"
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {cards.map((card) => (
          <div 
          className="col-6 g-4" 
          key={card.id}
          >
            <Card 
            title={card.title} 
            imageSource={card.imagen} 
            enlaceUrl={card.url} 
            textContent={card.parrafo}
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
