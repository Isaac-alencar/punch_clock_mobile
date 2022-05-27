import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FistIcon from '@assets/icons/fist.png';

import { Container, Icon } from './floating-button.styles';

const FloatingButton = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('CalendarScreen')}>
      <Icon source={FistIcon}></Icon>
    </Container>
  );
};

export default FloatingButton;
