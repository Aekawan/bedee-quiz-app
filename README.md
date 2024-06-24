
# React Native Quiz App

This project is a React Native application for a quiz. It shuffles questions and answers, allows users to answer questions, and displays a leaderboard with the user's score.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (only for React Native CLI users, not required for Expo users)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

### Step-by-Step Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Aekawan/bedee-quiz-app.git>
   cd bedee-quiz-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if you prefer yarn

   ```bash
   yarn install
   ```

3. Install react-native-vector-icons:

   ```bash
   npm install react-native-vector-icons
   ```

4. Link the react-native-vector-icons (only if you're using React Native version below 0.60):

  ```bash
   react-native link react-native-vector-icons
  ```

5. For iOS users, install CocoaPods dependencies:

  ```bash
   cd ios
   pod install
   cd ..
  ```

## Running the App

### Running on iOS

1. Start the Metro Bundler:

  ```bash
   npm start

# or

   yarn start
  ```

2. In another terminal, run:

  ```bash
   npx react-native run-ios
  ```

### Running on Android

1. Make sure you have an Android emulator running or a physical device connected.

2. Start the Metro Bundler:

  ```bash
   npm start

# or

   yarn start
  ```

3. In another terminal, run:

  ```bash
   npx react-native run-android
  ```

## Project Structure

```bash
react-native-quiz-app/
├── android/
├── ios/
├── src/
│   ├── components/
│   │   ├── AnswerButton.tsx
│   │   ├── Header.tsx
│   │   ├── LeaderBoardButton.tsx
│   │   ├── Question.tsx
│   │   ├── QuizContainer.tsx
│   │   ├── SubmitButton.tsx
│   │   ├── QuizHeader.tsx
│   ├── context/
│   │   └── QuizContext.tsx
│   ├── data/
│   │   ├── leaderboard.ts
│   │   └── questions.ts
│   ├── screens/
│   │   ├── QuizScreen.tsx
│   │   └── LeaderboardScreen.tsx
│   ├── types/
│   │   └── navigation.ts
│   ├── utils/
│   │   └── index.ts
│   └── theme.ts
├── .gitignore
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

1. **Quiz Screen**:
   - Displays 20 shuffled questions.
   - Each question has multiple shuffled answers.
   - Users can select an answer for each question.
   - Answers are immediately checked for correctness and indicated with icons.

2. **Leaderboard Screen**:
   - Displays the user's score after completing the quiz.
   - Users can navigate back to the quiz to retry.

## Screenshots

![alt text](https://raw.githubusercontent.com/Aekawan/bedee-quiz-app/main/screenshot/1.png?raw=true)

![alt text](https://raw.githubusercontent.com/Aekawan/bedee-quiz-app/main/screenshot/2.png?raw=true)

![alt text](https://raw.githubusercontent.com/Aekawan/bedee-quiz-app/main/screenshot/3.png?raw=true)

![alt text](https://raw.githubusercontent.com/Aekawan/bedee-quiz-app/main/screenshot/4.png?raw=true)

![alt text](https://raw.githubusercontent.com/Aekawan/bedee-quiz-app/main/screenshot/5.png?raw=true)

![alt text](https://raw.githubusercontent.com/Aekawan/bedee-quiz-app/main/screenshot/6.png?raw=true)
