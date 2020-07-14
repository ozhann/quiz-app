import React from "react";
import FlashCard from "./Flashcard";

const FlashcardList = ({ flashCards }) => {
  return (
    <div className="card-grid">
      {flashCards.map((flashCard) => {
        return <FlashCard flashCard={flashCard} id={flashCard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
