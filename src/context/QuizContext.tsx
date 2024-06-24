import React, {createContext, useState, useContext, ReactNode} from 'react';

interface QuizContextProps {
  totalQuestions: number;
  answeredQuestions: number;
  score: number;
  setTotalQuestions: (value: number) => void;
  setAnsweredQuestions: (value: number) => void;
  setScore: (value: number) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [score, setScore] = useState<number>(0);

  const resetQuiz = () => {
    setTotalQuestions(0);
    setAnsweredQuestions(0);
    setScore(0);
  };

  return (
    <QuizContext.Provider
      value={{
        totalQuestions,
        answeredQuestions,
        score,
        setTotalQuestions,
        setAnsweredQuestions,
        setScore,
        resetQuiz,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextProps => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
