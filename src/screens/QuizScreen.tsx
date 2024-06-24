import React, {useState, useEffect, useCallback, useRef} from 'react';
import {FlatList, Alert} from 'react-native';
import questions, {IQuestion} from '../data/questions';
import {shuffleArray} from '../utils';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';

import {RootStackParamList} from '../types/navigation';
import {useQuiz} from '../context/QuizContext';
import QuizContainer from '../components/QuizContainer';
import Question from '../components/Question';
import AnswerButton from '../components/AnswerButton';
import SubmitButton from '../components/SubmitButton';
import LeaderBoardButton from '../components/LeaderBoardButton';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

const ButtonContainer = styled.View`
  margin-top: 20px;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 24px;
  margin: 16px;
`;

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const {setTotalQuestions, setAnsweredQuestions, setScore, score} = useQuiz();
  const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const flatListRef = useRef<FlatList>(null);

  const initializeQuiz = useCallback(() => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 20);
    const shuffledAnswers = shuffledQuestions.map(q => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
    setCurrentQuestions(shuffledAnswers);
    setTotalQuestions(shuffledAnswers.length);
    setSelectedAnswers({});
    setAnsweredQuestions(0);
    setScore(0);

    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
    }
  }, [setTotalQuestions, setAnsweredQuestions, setScore]);

  useEffect(() => {
    initializeQuiz();
  }, [initializeQuiz]);

  useFocusEffect(
    useCallback(() => {
      initializeQuiz();
    }, [initializeQuiz]),
  );

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    if (!selectedAnswers[questionIndex]) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answer,
      });

      setAnsweredQuestions(Object.keys(selectedAnswers).length + 1);

      if (currentQuestions[questionIndex].correctAnswer === answer) {
        setScore(score + 1);
      }
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length < currentQuestions.length) {
      Alert.alert(
        'Incomplete',
        'You must answer all questions before submitting.',
      );
      return;
    }

    Alert.alert('Quiz Completed', `Your score is ${score}`, [
      {
        text: 'Go to Leaderboard',
        onPress: () => navigation.navigate('Leaderboard', {score}),
      },
    ]);
  };

  const handleGoToLeaderBoard = () => {
    navigation.navigate('Leaderboard', {score});
  };

  const renderItem = ({item, index}: {item: IQuestion; index: number}) => (
    <Question key={index} text={item.question} number={index + 1}>
      {item.answers.map((answer, idx) => (
        <AnswerButton
          key={idx}
          text={answer}
          onPress={() => handleAnswerSelect(index, answer)}
          selected={selectedAnswers[index] !== undefined}
          correct={
            selectedAnswers[index] === answer && item.correctAnswer === answer
          }
          incorrect={
            selectedAnswers[index] === answer && item.correctAnswer !== answer
          }
          disabled={!!selectedAnswers[index]}
        />
      ))}
    </Question>
  );

  return (
    <QuizContainer>
      <FlatList
        ref={flatListRef}
        data={currentQuestions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <ButtonContainer>
            <SubmitButton onPress={handleSubmit} />
            <LeaderBoardButton onPress={handleGoToLeaderBoard} />
          </ButtonContainer>
        }
      />
    </QuizContainer>
  );
};

export default QuizScreen;
