import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import questions, {Question} from '../data/questions';
import {shuffleArray} from '../utils';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`;

const QuestionContainer = styled.View`
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.surface};
  padding: 16px;
  border-radius: 8px;
`;

const QuestionText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 12px;
`;

const AnswerButton = styled.TouchableOpacity`
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  margin-vertical: 4px;
`;

const AnswerText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
`;

const StyledButton = styled.Button`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.primary};
`;

const QuizScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 20);
    const shuffledAnswers = shuffledQuestions.map(q => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
    setCurrentQuestions(shuffledAnswers);
  }, []);

  return (
    <Container>
      <FlatList
        data={currentQuestions}
        renderItem={({item}) => (
          <QuestionContainer>
            <QuestionText>{item.question}</QuestionText>
            {item.answers.map((answer, idx) => (
              <AnswerButton key={idx} onPress={() => {}}>
                <AnswerText>{answer}</AnswerText>
              </AnswerButton>
            ))}
          </QuestionContainer>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <StyledButton
        title="Go to Leaderboard"
        onPress={() => navigation.navigate('Leaderboard')}
      />
    </Container>
  );
};

export default QuizScreen;
