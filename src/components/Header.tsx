import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useQuiz} from '../context/QuizContext';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showBackButton = false}) => {
  const insets = useSafeAreaInsets();
  const {totalQuestions, answeredQuestions, score, resetQuiz} = useQuiz();
  const navigation = useNavigation();

  return (
    <HeaderContainer paddingTop={insets.top}>
      <HeaderContent>
        {showBackButton ? (
          <HeaderWithBackContainer>
            <TouchableOpacity
              onPress={() => {
                resetQuiz();
                navigation.goBack();
              }}>
              <IconAnt name="arrowleft" size={24} color="#05138A" />
            </TouchableOpacity>
            <HeaderTitle>{title}</HeaderTitle>
          </HeaderWithBackContainer>
        ) : (
          <LogoContainer>
            <Logo>
              <Icon name="500px" size={40} color="#05138A" />
              <HeaderTitle>{title}</HeaderTitle>
            </Logo>
            {totalQuestions > 0 && (
              <RowContainer>
                <ProgressTextBold>{answeredQuestions}</ProgressTextBold>
                <ProgressText>/ {totalQuestions}</ProgressText>
              </RowContainer>
            )}
          </LogoContainer>
        )}
      </HeaderContent>
      <HeaderContent>
        {!showBackButton && (
          <>
            <WelcomeText>Welcome</WelcomeText>
            <RowContainer>
              <ProgressText>Your Score</ProgressText>
              <ScoreText>{score}</ScoreText>
            </RowContainer>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(View)<{paddingTop: number}>`
  background-color: #fff;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
  padding-top: ${({paddingTop}) => paddingTop}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
`;

const HeaderContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const HeaderTitle = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  font-size: 32px;
  margin-left: 10px;
`;

const LogoContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const ProgressText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 14px;
  margin-top: 5px;
`;

const ProgressTextBold = styled(ProgressText)`
  font-weight: bold;
  margin-right: 5px;
`;

const ScoreText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 2px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const WelcomeText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  margin-top: 10px;
`;

const HeaderWithBackContainer = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export default Header;
