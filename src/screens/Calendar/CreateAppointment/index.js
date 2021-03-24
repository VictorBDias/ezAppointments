import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { parseISO } from 'date-fns';

// CUSTOM IMPORTS
import Header from '~/components/Header';
import {
  Container,
  Form,
  Input,
  Button,
  InputMask,
  ButtonText,
  InputLabel,
} from './styles';
import { colors } from '~/styles';
import PrimaryInput from '~/components/Input/primary';
import MaskedInput from '~/components/Input/masked';
import Typography from '~/components/Typography';

const CreateAppointment = ({ route }) => {
  const navigation = useNavigation();

  // REFS
  const formRef = React.useRef(null);

  // STATES
  const [nameValue, setNameValue] = React.useState('Victor Batisttete');
  const [appointmentHour, setAppointmentHour] = React.useState();
  const [appointmentDescription, setAppointmentDescription] = React.useState(
    ''
  );

  // FUNCTIONS
  function handleSubmit() {
    console.log('enviado');
  }

  return (
    <>
      <Header
        title="Agendar"
        iconLeft="arrow-back"
        openSideMenu={navigation.goBack}
      />
      <Container>
        <ScrollView>
          <Form ref={formRef} onSubmit={() => {}}>
            <Typography type="title">{nameValue}</Typography>

            <InputLabel>Horário</InputLabel>
            <InputMask
              type="datetime"
              title="Horário"
              name="schedule"
              placeholder="Horário para o agendamento"
              value={appointmentHour}
              options={{
                format: 'HH:mm',
              }}
              onChangeText={(text) => {
                setAppointmentHour(text);
              }}
            />
            {/* <MaskedInput
              description="Horário"
              valor={appointmentHour}
              onChangeText={(text) => {
                setAppointmentHour(text);
              }}
            /> */}

            <InputLabel>Descrição</InputLabel>
            <Input
              name="description"
              title="Descrição"
              placeholder="Descrição para o agendamento"
              onChangeText={(text) => {
                setAppointmentDescription(text);
              }}
            />
            {/* <PrimaryInput
              description="Descrição"
              onChangeText={(text) => {
                setAppointmentDescription(text);
                console.log(appointmentDescription);
              }}
            /> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Calendar');
              }}
            >
              <Button>
                <ButtonText>Marcar horário</ButtonText>
              </Button>
            </TouchableOpacity>
          </Form>
        </ScrollView>
      </Container>
    </>
  );
};

export default CreateAppointment;
