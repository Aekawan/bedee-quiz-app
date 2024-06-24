import React from 'react';
import styled from 'styled-components/native';

const QuestionContainer = styled.View`
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.surface};
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
`;

const QuestionText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 12px;
`;

interface QuestionProps {
  number: number;
  text: string;
  children: React.ReactNode;
}

const Question: React.FC<QuestionProps> = ({text, number, children}) => (
  <QuestionContainer>
    <QuestionText>
      {number}. {text}
    </QuestionText>
    {children}
  </QuestionContainer>
);

export default Question;
