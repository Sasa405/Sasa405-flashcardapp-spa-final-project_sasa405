import React from "react";

const FlashcardView = ({
  flashcards,
  currentCardIndex,
  showAnswer,
  toggleAnswer,
  nextCard,
  markCard,
  markedCards,
  reviewMode,
  handleAnswerChange,
}) => {
  const card = flashcards[currentCardIndex];

  const handleNextCard = () => {
    nextCard();
  };

  const handleMarkCard = () => {
    markCard();
  };

  const renderCard = () => {
    if (card) {
      const { question, answer } = card;

      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{question}</h5>
            {showAnswer && <p className="card-text">{answer}</p>}
            <button className="btn btn-primary mr-2" onClick={toggleAnswer}>
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
            {!reviewMode && (
              <button className="btn btn-primary" onClick={handleNextCard}>
                Next Card
              </button>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderReviewCard = () => {
    if (markedCards.length > 0) {
      const reviewCard = markedCards[currentCardIndex];
      const { question, answer, userAnswer } = reviewCard;

      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{question}</h5>
            <p className="card-text">{answer}</p>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Your Answer"
              value={userAnswer || ""}
              onChange={handleAnswerChange}
            />
            <button className="btn btn-primary mt-2" onClick={handleNextCard}>
              Next Card
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return <div>{reviewMode ? renderReviewCard() : renderCard()}</div>;
};

export default FlashcardView;






