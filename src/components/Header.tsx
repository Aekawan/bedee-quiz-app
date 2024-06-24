import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useQuiz} from '../context/QuizContext';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showBackButton = false}) => {
  const insets = useSafeAreaInsets();
  const {totalQuestions, answeredQuestions, score, resetQuiz} = useQuiz();
  const navigation = useNavigation();

  return (
    <View style={[styles.headerContainer, {paddingTop: insets.top}]}>
      <View style={styles.headerContent}>
        {showBackButton ? (
          <View style={styles.headerWithBackContainer}>
            <TouchableOpacity
              onPress={() => {
                resetQuiz();
                navigation.goBack();
              }}>
              <IconAnt name="arrowleft" size={24} color="#05138A" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        ) : (
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Icon name="500px" size={40} color="#05138A" />
              <Text style={styles.headerTitle}>{title}</Text>
            </View>
            {totalQuestions > 0 && (
              <View style={styles.rowContainer}>
                <Text style={styles.progressTextBold}>{answeredQuestions}</Text>
                <Text style={styles.progressText}>/ {totalQuestions}</Text>
              </View>
            )}
          </View>
        )}
      </View>
      <View style={styles.headerContent}>
        {!showBackButton && (
          <>
            <Text style={styles.welcomeText}>Welcome</Text>
            <View style={styles.rowContainer}>
              <Text style={styles.progressText}>Your Score</Text>
              <Text style={styles.scoreText}>{score}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffff',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  headerTitle: {
    color: '#091288',
    fontWeight: 'bold',
    fontSize: 32,
    marginLeft: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    color: '#091288',
    fontSize: 14,
    marginTop: 5,
  },
  progressTextBold: {
    color: '#091288',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    marginRight: 5,
  },
  scoreText: {
    color: '#091288',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 2,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#091288',
    marginTop: 10,
  },
  headerWithBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
});

export default Header;
