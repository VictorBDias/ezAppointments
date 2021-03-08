import React from 'react';
import PropTypes from 'prop-types';
import { Platform, Alert, ActivityIndicator } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { MaterialIcons } from '@expo/vector-icons';

// APIs
import api from '~/services/api';
import { showMessage } from '~/utils/apiUtils';

// CUSTOM IMPORTS
import { colors } from '~/styles';
import { Touchable, Container, ImagePreview, CameraIcon } from './styles';

const ImagePicker = ({ style, setImage, initialValue }) => {
  // STATES
  const [preview, setPreview] = React.useState(initialValue || null);
  const [isUploading, setIsUploading] = React.useState(false);

  // FUNCTIONS
  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert(
          'Sorry, we need camera roll permissions to make this work!'
        );
      }
    }
  };

  const pickImage = async () => {
    getPermission();

    try {
      const result = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setPreview(result.uri);

        const file = new FormData();
        file.append('file', {
          uri: result.uri,
          type: 'preview/jpeg',
          name: 'preview',
        });

        setIsUploading(true);

        await api
          .post(`/users/file`, file)
          .then((response) => {
            setImage(response.data.url);

            setIsUploading(false);
          })
          .catch((err) => {
            setIsUploading(false);

            showMessage(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Touchable style={style} onPress={pickImage}>
      <Container>
        {isUploading ? (
          <ActivityIndicator size="large" color={colors.accent} />
        ) : (
          <>
            {preview ? (
              <ImagePreview source={{ uri: preview }} />
            ) : (
              <CameraIcon>
                <MaterialIcons name="camera-alt" size={24} color="white" />
              </CameraIcon>
            )}
          </>
        )}
      </Container>
    </Touchable>
  );
};

ImagePicker.propTypes = {
  style: PropTypes.any,
  setImage: PropTypes.func,
  initialValue: PropTypes.string,
};

ImagePicker.defaultProps = {
  style: null,
  setImage: () => {},
  initialValue: null,
};

export default ImagePicker;
