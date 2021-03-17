import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

//* CUSTOM IMPORTS
import AppointmentCell from '~/components/AppointmentNameList/AppointmentCell';
import Loader from '~/components/Loader';

const AppointmentNameList = ({ users, isLoaded, selected, ...rest }) => (
  <FlatList
    {...rest}
    showsVerticalScrollIndicator
    data={users}
    keyExtractor={(item) => String(item.id)}
    renderItem={({ item }) => <AppointmentCell user={item} date={selected} />}
  />
);
AppointmentNameList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool,
};
AppointmentNameList.defaultProps = { isLoaded: false };
export default AppointmentNameList;
