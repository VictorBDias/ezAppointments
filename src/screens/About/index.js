import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
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
  PhotoButton,
} from './styles';
// import Button from '~/components/Button';

const Home = () => {
  const navigation = useNavigation();

  // STATES
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [description, setDescription] = useState(
    'Bem vindo ao ezAppointments, o intuito desse aplicativo é oferecer ao seu negócio facilidade de gestão e gerencia sobre agendamentos realizados com seu cliente. Assim que contratar nossos serviços você poderá substituir nossa logo pela sua própria, assim como adicionar uma imagem e apresentação do seu estabelecimento para seus clientes se situarem. Na funcionalidade de calendário você poderá criar agendamentos para seus usuários em um banco de dados reservado para sua aplicação, assim seus clientes e você sempre terão esse controle em mãos. Agradecemos a preferencia (:'
  );
  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [serviceId, setServiceId] = React.useState(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [image, setImage] = useState(null);

  // FUNCTIONS

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Conceda permissão');
        }
      }
    })();
  }, []);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <View style={{ flexDirection: 'row', marginEnd: 16 }}>
  //         <TouchableOpacity
  //           onPress={() => {
  //             // setEditable(!editable);
  //             // if (editable === true) postDescriptionApi();
  //           }}
  //         >
  //           <MaterialIcons
  //             name={editable ? 'check-circle' : 'edit'}
  //             size={24}
  //             color={colors.black50}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //   });
  // }, [navigation, editable]);

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
        iconRight="edit"
        edit={navigation.openDrawer}
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
          <PhotoButton title="Adicionar" onPress={pickImage} />
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
