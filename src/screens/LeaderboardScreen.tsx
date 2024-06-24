import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const LeaderboardScreen: React.FC = () => {
  return (
    <Container>
      <Title>Leaderboard</Title>
      {/* Display leaderboard data here */}
    </Container>
  );
};

export default LeaderboardScreen;
