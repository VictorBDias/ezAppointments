import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// APIs
// import { getAboutData, postAboutData } from '~/apis/admin/about';
// import { deleteService } from '~/apis/admin/services';

// CUSTOM IMPORTS
// import { useAbout } from '~/hooks/stacks/about';
// import Loader from '~/components/Loader';
import logo from '~/assets/logo.png';
import Typography from '~/components/Typography';
import colors from '~/styles/colors';
import Header from '~/components/Header';
// import OptionsModal from '~/components/utils/OptionsModal';

import {
  Container,
  Logo,
  DescriptionInput,
  DescriptionLoader,
  DescriptionLoader2,
} from './styles';
// import Button from '~/components/Button';

const Home = () => {
  const navigation = useNavigation();

  // STATES
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [description, setDescription] = useState(
    'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste '
  );
  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [serviceId, setServiceId] = React.useState(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [image, setImage] = useState(null);

  // FUNCTIONS
  // useEffect(() => {
  //   const fetch = async () => {
  //     await getAboutData().then((response) => {
  //       setDescription(response.data.description);
  //       setServices(response.data.services);
  //       setIsLoaded(true);
  //     });
  //   };
  //   fetch();
  // }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  React.useLayoutEffect(() => {
    // async function postDescriptionApi() {
    //   await postAboutData(description);
    // }

    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginEnd: 16 }}>
          <TouchableOpacity
            onPress={() => {
              // setEditable(!editable);
              // if (editable === true) postDescriptionApi();
            }}
          >
            <MaterialIcons
              name={editable ? 'check-circle' : 'edit'}
              size={24}
              color={colors.black50}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, editable]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const handlePhotoDelete = async () => {
  //   setShowModal(false);
  //   setIsDeleting(true);

  //   await deleteService({ serviceId }).then(() => {
  //     const auxArray = services;

  //     const filteredArray = auxArray.filter((obj) => obj.id !== serviceId);

  //     setServices(filteredArray);
  //   });

  //   setIsDeleting(false);
  // };

  return (
    <>
      <Header
        title="Sobre"
        iconLeft="menu"
        openSideMenu={navigation.openDrawer}
      />
      <ScrollView>
        <Container>
          <>
            <Logo source={logo} />

            <DescriptionInput
              editable={editable}
              multiline
              onChangeText={(text) => setDescription(text)}
              value={description}
            />
          </>
        </Container>
        {/* <OptionsModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="Escolha uma opção"
        options={[
          {
            name: 'Excluir foto',
            icon: 'delete',
            onPress: handlePhotoDelete,
            color: colors.error,
          },
        ]}
      /> */}
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Button title="Adicionar" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
