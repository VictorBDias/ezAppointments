import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';

const Loader = ({ style, ...rest }) => {
  const dimensions = Dimensions.get('window');

  return (
    <View
      style={
        style || {
          width: dimensions.width,
          justifyContent: 'center',
        }
      }
    >
      <ActivityIndicator animating {...rest} />
    </View>
  );
};

export default Loader;
