import React, { Component, MouseEvent } from "react";
import { ICard } from "../models/card";
import Modal from "./Modal";

interface ICardProps {
  card: ICard;
}

const Card: React.FC<ICardProps> = ({ card }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const author = card.author[0].toUpperCase() + card.author.slice(1);
  const showModal = () => {
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };
  return (
    <div className='card'>
      <div className='card-img-box'>
        <img src={card.img_src} alt={card.author} className='card-img' />
      </div>
      <div>{card.year}</div>
      <div>{author}</div>
      <div>{card.item}</div>
      <button className='modal-open' onClick={showModal}>
        Open
      </button>
      {isVisible && <Modal card={card} hideModal={hideModal} />}
    </div>
  );
};

export default Card;
