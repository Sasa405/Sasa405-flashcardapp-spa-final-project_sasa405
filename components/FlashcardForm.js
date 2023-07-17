import React, { useState } from "react";

const FlashcardForm = ({ addFlashcard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFlashcard(question, answer);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="questionInput">Question:</label>
        <input
          type="text"
          className="form-control"
          id="questionInput"
          value={question}
          onChange={handleQuestionChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="answerInput">Answer:</label>
        <input
          type="text"
          className="form-control"
          id="answerInput"
          value={answer}
          onChange={handleAnswerChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Flashcard
      </button>
    </form>
  );
};

export default FlashcardForm;




// import React, { useState } from "react";

// const FlashcardForm = ({ addFlashcard }) => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addFlashcard(question, answer);
//     setQuestion("");
//     setAnswer("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-3">
//       <div className="form-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter answer"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Add Flashcard
//       </button>
//     </form>
//   );
// };

// export default FlashcardForm;












