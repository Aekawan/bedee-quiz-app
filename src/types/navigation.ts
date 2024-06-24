import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Quiz: undefined;
  Leaderboard: {score: number};
};

export type LeaderboardScreenRouteProp = RouteProp<
  RootStackParamList,
  'Leaderboard'
>;

export type LeaderboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Leaderboard'
>;
