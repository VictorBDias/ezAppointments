import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

// CUSTOM IMPORTS
import { Container, Name } from './styles';

const AppointmentCell = ({ user, date }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate('CreateAppointment', { userId: user.id, date });
      }}
    >
      <Name>{user.name}</Name>
    </Container>
  );
};

AppointmentCell.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default AppointmentCell;
