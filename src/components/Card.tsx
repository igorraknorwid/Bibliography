import React, { Component, MouseEvent } from "react";
import { ICard } from "../models/card";
import Modal from "./Modal";
import expand from "../images/expand-arrows.png";
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
      <div className='card-info'>
        <div className='card-info__left'>
          <div className='card-info__upper'>
            <div className='card-item'>{card.year}</div>
            <div className='card-item'>{author}</div>
          </div>
          <div>
            <div className='card-hash'>{card.item}</div>
          </div>
        </div>
        <div className='card-info__right'>
          <button className='modal-open' onClick={showModal}>
            <img src={expand} className='modal-logo' alt='expand' />
          </button>
        </div>
      </div>
      {isVisible && <Modal card={card} hideModal={hideModal} />}
    </div>
  );
};

export default Card;
