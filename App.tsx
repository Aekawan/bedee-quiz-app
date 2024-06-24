import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components/native';
import QuizScreen from './src/screens/QuizScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import theme from './src/theme';
import {RootStackParamList} from './src/types/navigation';
import Header from './src/components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QuizProvider} from './src/context/QuizContext';

const Stack = createStackNavigator<RootStackParamList>();

const QuizHeader: React.FC = () => {
  return <Header title="BeDee Quiz" />;
};

const LeaderBoardHeader: React.FC = () => {
  return <Header title="Leader Board" showBackButton />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <QuizProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Quiz">
              <Stack.Screen
                name="Quiz"
                component={QuizScreen}
                options={{
                  header: QuizHeader,
                }}
              />
              <Stack.Screen
                name="Leaderboard"
                component={LeaderboardScreen}
                options={{
                  header: LeaderBoardHeader,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QuizProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
