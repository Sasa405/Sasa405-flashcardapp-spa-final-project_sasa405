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



