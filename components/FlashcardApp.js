
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlashcardForm from "./FlashcardForm";
import FlashcardView from "./FlashcardView";
import HtmlFlashcards from "./flashcards/HtmlFlashcards";
import CssFlashcards from "./flashcards/CssFlashcards";
import JavaScriptFlashcards from "./flashcards/JavaScriptFlashcards";
import ReactFlashcards from "./flashcards/ReactFlashcards";
import backgroundImage from "../Assets/images/pexels-pixabay-247819.jpg"; 

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [markedCards, setMarkedCards] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const addFlashcard = (question, answer) => {
    const newFlashcards = [...flashcards, { question, answer }];
    setFlashcards(newFlashcards);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
    setShowAnswer(false);
  };

  const markCard = () => {
    const currentCard = flashcards[currentCardIndex];
    setMarkedCards([...markedCards, { ...currentCard, userAnswer: "" }]);
    nextCard();
  };

  const handleAnswerChange = (event) => {
    const updatedMarkedCards = [...markedCards];
    updatedMarkedCards[currentCardIndex].userAnswer = event.target.value;
    setMarkedCards(updatedMarkedCards);
  };

  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setMarkedCards([]);
    setSelectedSubject("");
  };

  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
    setFlashcards(getFlashcardsBySubject(subject));
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setMarkedCards([]);
  };

  const getFlashcardsBySubject = (subject) => {
    switch (subject) {
      case "html":
        return HtmlFlashcards;
      case "css":
        return CssFlashcards;
      case "javascript":
        return JavaScriptFlashcards;
      case "react":
        return ReactFlashcards;
      default:
        return [];
    }
  };

  const filteredFlashcards =
    selectedSubject !== "" ? flashcards.filter((card) => card.subject === selectedSubject) : flashcards;

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="mt-5 mb-3">Flashcard App</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${selectedSubject === "html" && "active"}`}
              onClick={() => handleSubjectSelection("html")}
            >
              <span className="nav-link">HTML</span>
            </li>
            <li
              className={`nav-item ${selectedSubject === "css" && "active"}`}
              onClick={() => handleSubjectSelection("css")}
            >
              <span className="nav-link">CSS</span>
            </li>
            <li
              className={`nav-item ${selectedSubject === "javascript" && "active"}`}
              onClick={() => handleSubjectSelection("javascript")}
            >
              <span className="nav-link">JavaScript</span>
            </li>
            <li
              className={`nav-item ${selectedSubject === "react" && "active"}`}
              onClick={() => handleSubjectSelection("react")}
            >
              <span className="nav-link">React</span>
            </li>
          </ul>
          <button className="btn btn-link my-2 my-sm-0" onClick={toggleReviewMode}>
            {reviewMode ? "Exit Review" : "Review Mode"}
          </button>
        </div>
      </nav>
      {!reviewMode && (
        <div className="mb-5">
          <FlashcardForm addFlashcard={addFlashcard} />
        </div>
      )}
      <div>
        {reviewMode ? (
          <div>
            <h3>Flashcard Overview</h3>
            {flashcards.length > 0 ? (
              <ul className="list-group">
                {flashcards.map((card, index) => (
                  <li className="list-group-item" key={index}>
                    <strong>Question:</strong> {card.question},{" "}
                    <strong>Answer:</strong> {card.answer}
                  </li>
                ))}
              </ul>
            ) : (
              <div>Having Fun learnings Thing's</div>
            )}
          </div>
        ) : (
          <div>
            {filteredFlashcards.length > 0 ? (
              <FlashcardView
                flashcards={filteredFlashcards}
                currentCardIndex={currentCardIndex}
                showAnswer={showAnswer}
                toggleAnswer={toggleAnswer}
                nextCard={nextCard}
                markCard={markCard}
                markedCards={markedCards}
                reviewMode={reviewMode}
                handleAnswerChange={handleAnswerChange}
              />
            ) : (
              <div>Having Fun learnings Thing's</div>
            )}
          </div>
        )}
      </div>
      {reviewMode && (
        <div>
          <h3>Marked Cards for Review</h3>
          {markedCards.length > 0 ? (
            <ul className="list-group">
              {markedCards.map((card, index) => (
                <li className="list-group-item" key={index}>
                  <strong>Question:</strong> {card.question},{" "}
                  <strong>Answer:</strong> {card.answer}
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Your Answer"
                    value={card.userAnswer || ""}
                    onChange={handleAnswerChange}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div>No marked cards.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default FlashcardApp;


