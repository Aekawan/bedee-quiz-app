import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import leaderboard, {LeaderboardEntry} from '../data/leaderboard';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`;

const LeaderboardItem = styled.View<{
  isYourScore?: boolean;
}>`
  padding: 16px;
  margin-bottom: 10px;
  background-color: ${props =>
    props.isYourScore
      ? props.theme.colors.primary
      : props.theme.colors.surface};
  border-radius: 8px;
`;

const LeaderboardText = styled.Text<{bold?: boolean; isYourScore?: boolean}>`
  font-size: 18px;
  color: ${props => (props.isYourScore ? '#ffff' : props.theme.colors.text)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

const LeaderboardScreen: React.FC<{route: any}> = ({route}) => {
  const {score = null} = route?.params;

  return (
    <Container>
      <LeaderboardItem isYourScore>
        <LeaderboardText bold isYourScore>
          Your Score: {score}
        </LeaderboardText>
      </LeaderboardItem>
      <FlatList
        data={leaderboard}
        renderItem={({item}: {item: LeaderboardEntry}) => (
          <LeaderboardItem>
            <LeaderboardText>
              {item.name}: {item.score}
            </LeaderboardText>
          </LeaderboardItem>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </Container>
  );
};

export default LeaderboardScreen;
