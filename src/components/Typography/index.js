/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  regular: {
    fontSize: 14,
  },

  highlight: {
    fontSize: 14,
    color: colors.accent,
  },
  highlightBold: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: 'bold',
  },
  white: {
    fontSize: 18,
    color: colors.whiteSmoke,
  },
});

const Typography = ({ type, ...rest }) => {
  function handleStyles() {
    switch (type) {
      case 'title':
        return styles.title;
      case 'regular':
        return styles.regular;
      case 'highlight':
        return styles.highlight;
      case 'highlightBold':
        return styles.highlightBold;
      case 'white':
        return styles.white;
      default:
        return styles.regular;
    }
  }
  return <Text style={handleStyles()} {...rest} />;
};

export default Typography;

Typography.propTypes = { type: PropTypes.string.isRequired };
