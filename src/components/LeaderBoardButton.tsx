import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.primary};
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
`;

interface ButtonProps {
  onPress: () => void;
}

const LeadBoardButton: React.FC<ButtonProps> = ({onPress}) => (
  <Button onPress={onPress}>
    <ButtonText>Leader Board</ButtonText>
  </Button>
);

export default LeadBoardButton;
