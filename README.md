# Sasa405-flashcardapp-spa-final-project_sasa405
Flashcards with questions and answers



# Flashcard App

This is a React application that allows you to create and review flashcards on various subjects. You can add flashcards with questions and answers, and then review them in either regular mode or review mode.

## Installation

To run this application locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies by running the command: `npm install`.
4. Start the application by running the command: `npm start`.
5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

The Flashcard App consists of the following components:

- **FlashcardApp**: The main component that manages the state of the flashcards, handles user interactions, and renders the FlashcardForm and FlashcardView components.
- **FlashcardForm**: A form component that allows users to add new flashcards by entering a question and answer.
- **FlashcardView**: A component that displays the flashcards and handles navigation and user interactions during the review process.

When the application starts, you will see a navbar with subject categories (HTML, CSS, JavaScript, React) and a "Review Mode" button. Clicking on a subject category will load flashcards related to that subject. You can also switch to review mode by clicking the "Review Mode" button.

In regular mode, you can add new flashcards using the FlashcardForm component. The flashcards are displayed one at a time in the FlashcardView component. You can toggle the answer, move to the next card, and mark cards for review.

In review mode, you can see an overview of all the flashcards added and review the marked cards by entering your answers.

## Flashcards Data

The flashcards data is stored in separate JavaScript files for each subject (HtmlFlashcards.js, CssFlashcards.js, JavaScriptFlashcards.js, ReactFlashcards.js). Each file exports an array of flashcard objects, where each object has a question, answer, and subject property.

You can add more flashcards to these files by following the same structure.









```jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlashcardForm from "./FlashcardForm";
import FlashcardView from "./FlashcardView";
import HtmlFlashcards from "./flashcards/HtmlFlashcards";
import CssFlashcards from "./flashcards/CssFlashcards";
import JavaScriptFlashcards from "./flashcards/JavaScriptFlashcards";
import ReactFlashcards from "./flashcards/ReactFlashcards";
import backgroundImage from "../Assets/images/pexels-pixabay-247819.jpg";
```

In this section, we are importing necessary dependencies, components, and data files required for the Flashcard App. `React` and `useState` are imported from the `react` library to create a React functional component and manage state. We import the Bootstrap CSS for styling purposes. `FlashcardForm` and `FlashcardView` are custom components used for adding and displaying flashcards, respectively. The `HtmlFlashcards`, `CssFlashcards`, `JavaScriptFlashcards`, and `ReactFlashcards` are data files containing flashcard questions and answers for different subjects (HTML, CSS, JavaScript, and React). Lastly, we import the background image that will be used for the app.

```jsx
const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [markedCards, setMarkedCards] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
```

Here, we define our main functional component `FlashcardApp` using an arrow function. We set up multiple state variables using the `useState` hook. These states are:
- `flashcards`: An array that holds the list of flashcards.
- `currentCardIndex`: An integer to keep track of the index of the currently displayed flashcard.
- `showAnswer`: A boolean to track whether the answer of the current flashcard is shown or hidden.
- `markedCards`: An array to store the flashcards that the user marked for review.
- `reviewMode`: A boolean to toggle between normal mode and review mode.
- `selectedSubject`: A string to store the currently selected subject.

```jsx
  const addFlashcard = (question, answer) => {
    const newFlashcards = [...flashcards, { question, answer }];
    setFlashcards(newFlashcards);
  };
```

This function `addFlashcard` is responsible for adding a new flashcard to the `flashcards` array. It takes two arguments, `question` and `answer`, and creates a new flashcard object with those values. Then it uses the `setFlashcards` function (provided by the `useState` hook) to update the `flashcards` state with the new flashcard.

```jsx
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
```

`toggleAnswer` function is used to toggle the visibility of the flashcard answer. It flips the value of `showAnswer` using the `setShowAnswer` function.

```jsx
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
    setShowAnswer(false);
  };
```

`nextCard` function is used to move to the next flashcard in the list. It increments the `currentCardIndex` state by 1 and also ensures that the answer is hidden (`showAnswer` is set to `false`).

```jsx
  const markCard = () => {
    const currentCard = flashcards[currentCardIndex];
    setMarkedCards([...markedCards, { ...currentCard, userAnswer: "" }]);
    nextCard();
  };
```

`markCard` function is used to mark the current flashcard for review. It takes the flashcard at the current index from the `flashcards` array, creates a copy of it, and adds it to the `markedCards` array along with an additional property `userAnswer` initialized to an empty string. Then it calls the `nextCard` function to move to the next flashcard.

```jsx
  const handleAnswerChange = (event) => {
    const updatedMarkedCards = [...markedCards];
    updatedMarkedCards[currentCardIndex].userAnswer = event.target.value;
    setMarkedCards(updatedMarkedCards);
  };
```

`handleAnswerChange` function is called when the user enters an answer in the review mode for a marked card. It updates the `userAnswer` property of the corresponding flashcard in the `markedCards` array with the entered value.

```jsx
  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setMarkedCards([]);
    setSelectedSubject("");
  };
```

`toggleReviewMode` function is used to toggle between normal mode and review mode. When review mode is activated, it resets all necessary states and clears any marked cards.

```jsx
  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
    setFlashcards(getFlashcardsBySubject(subject));
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setMarkedCards([]);
  };
```

`handleSubjectSelection` function is called when the user selects a subject from the navigation menu. It updates the `selectedSubject` state and fetches the corresponding flashcards using the `getFlashcardsBySubject` function. It also resets other states to their initial values.

```jsx
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
```

`getFlashcardsBySubject` is a helper function that returns the flashcards array based on the selected subject. It takes the `subject` string as input and uses a switch statement to determine which subject's flashcards to return.

```jsx
  const filteredFlashcards =
    selectedSubject !== "" ? flashcards.filter((card) => card.subject === selectedSubject) : flashcards;
```

This line filters the `flashcards` array based on the `selectedSubject` state. If a subject is selected, it returns only the flashcards that belong to that subject; otherwise, it returns all the flashcards.

The rest of the code includes JSX elements that render the flashcard app interface based on the current state. The app displays a navigation bar with different subjects, a flashcard view area, a review mode, and a form for adding new flashcards. When the user clicks on the "Review Mode" button, the app switches to review mode, and the user can review and mark flashcards for later review.

Overall, the Flashcard App allows users to add, view, and review flashcards based on different subjects and topics. It's a simple application that demonstrates how to manage state, handle user input, and display dynamic content using React components.




## Contributing

If you would like to contribute to this project, you can fork the repository, make your changes, and submit a pull request. Your contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



