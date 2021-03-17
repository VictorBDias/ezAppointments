import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//* CUSTOM IMPORTS
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    marginLeft: 16,
  },
});

const SearchBar = ({ placeholder, style, onSearch, isSearching }) => {
  //* STATES
  const [value, setValue] = React.useState('');

  return (
    <View style={{ ...styles.container, ...style }}>
      <MaterialIcons name="search" size={24} color={colors.black50} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onSubmitEditing={(value) => onSearch(value.nativeEvent.text)}
        returnKeyType="search"
        onChangeText={(text) => setValue(text)}
        value={value}
      />

      {value !== '' && (
        <TouchableOpacity onPress={() => setValue('')}>
          <MaterialIcons name="close" size={24} color={colors.black50} />
        </TouchableOpacity>
      )}
    </View>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onSearch: PropTypes.func,
  isSearching: PropTypes.bool,
};

SearchBar.defaultProps = {
  placeholder: null,
  style: null,
  onSearch: () => {},
  isSearching: false,
};

export default SearchBar;
