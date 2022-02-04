import React, { Component, MouseEvent } from "react";
import { ICard } from "../models/card";

interface IModalProps {
  card: ICard;
  hideModal(): void;
}

const Modal: React.FC<IModalProps> = ({ card, hideModal }) => {
  const author = card.author[0].toUpperCase() + card.author.slice(1);
  return (
    <div className='modal'>
      <div className='modal-img-box'>
        <img src={card.img_src} alt={card.author} className='modal-img' />
      </div>
      <button className='modal-close' onClick={hideModal}>
        <span className='modal-btn-span'>&#10005;</span>
      </button>
    </div>
  );
};

export default Modal;
