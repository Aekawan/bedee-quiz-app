import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = styled.TouchableOpacity<{
  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
}>`
  background-color: ${props =>
    props.correct
      ? '#4ccd81'
      : props.incorrect
      ? '#fa7e70'
      : props.selected
      ? '#e0e0e0'
      : '#ffffff'};
  border: ${props =>
    props.selected || props.correct || props.incorrect
      ? 'none'
      : '1px solid black'};
  border-radius: 8px;
  padding: 12px;
  margin-vertical: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerText = styled.Text<{
  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
}>`
  font-size: 16px;
  color: ${props =>
    props.correct
      ? '#ffff'
      : props.incorrect
      ? '#ffff'
      : props.disabled
      ? '#706f6f'
      : props.theme.colors.text};
`;

// const AnswerIcon = styled(Icon)`
//   margin-right: 10px;
// `;

interface AnswerButtonProps {
  text: string;
  onPress: () => void;
  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  text,
  onPress,
  selected,
  correct,
  incorrect,
  disabled,
}) => (
  <Button
    onPress={onPress}
    selected={selected}
    correct={correct}
    incorrect={incorrect}
    disabled={disabled}>
    <AnswerText correct={correct} incorrect={incorrect} disabled={disabled}>
      {text}
    </AnswerText>
    {correct && <Icon name="check-circle" size={20} color="white" />}
    {incorrect && <Icon name="times-circle" size={20} color="white" />}
  </Button>
);

export default AnswerButton;
