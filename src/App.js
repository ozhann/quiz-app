import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import axios from "axios";

import "./app.css";

const App = () => {
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashCards(
        res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <div className="container">
        <FlashcardList flashCards={flashCards} />
      </div>
    </>
  );
};

// const SAMPLE_FLASHCARDS = [
//   {
//     id: 1,
//     question: "What is 2 + 2?",
//     answer: 4,
//     options: ["2", "3", "4", "5"],
//   },
//   {
//     id: 2,
//     question: "Question 2?",
//     answer: "asnwer",
//     options: ["answer", "answer 2", "answer 3", "answer 4"],
//   },
// ];

export default App;
