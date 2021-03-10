import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// CUSTOM IMPORTS
import logo from '~/assets/logo.png';
import Typography from '~/components/Typography';
import colors from '~/styles/colors';
import Header from '~/components/Header';

import {
  Container,
  Logo,
  DescriptionInput,
  PhotoButton,
  ButtonText,
} from './styles';

const Home = () => {
  const navigation = useNavigation();

  // STATES
  const [description, setDescription] = useState(
    'Bem vindo ao ezAppointments, o intuito desse aplicativo é oferecer ao seu negócio facilidade de gestão e gerencia sobre agendamentos realizados com seu cliente. Assim que contratar nossos serviços você poderá substituir nossa logo pela sua própria, assim como adicionar uma imagem e apresentação do seu estabelecimento para seus clientes se situarem. Na funcionalidade de calendário você poderá criar agendamentos para seus usuários em um banco de dados reservado para sua aplicação, assim seus clientes e você sempre terão esse controle em mãos. Agradecemos a preferencia (:'
  );
  const [editable, setEditable] = useState(false);
  const [image, setImage] = useState(null);
  const [icon, setIcon] = useState('edit');

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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const edithandler = () => {
    setEditable(!editable);
    if (!editable) {
      setIcon('check-circle');
    } else {
      setIcon('edit');
    }
  };

  return (
    <>
      <Header
        title="Sobre"
        iconLeft="menu"
        openSideMenu={navigation.openDrawer}
        iconRight={icon}
        edit={edithandler}
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

        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <TouchableOpacity onPress={pickImage}>
            <PhotoButton>
              <ButtonText>Adicionar Foto</ButtonText>
            </PhotoButton>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 300, height: 200 }}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
