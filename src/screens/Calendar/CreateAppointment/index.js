import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { parseISO } from 'date-fns';

// CUSTOM IMPORTS
import Header from '~/components/Header';
import InputText from '~/components/Input';
import {
  Container,
  Form,
  Input,
  Button,
  MaskedText,
  ButtonText,
} from './styles';
import { colors } from '~/styles';
import Typography from '~/components/Typography';

const CreateAppointment = ({ route }) => {
  const navigation = useNavigation();

  // REFS
  const formRef = React.useRef(null);

  // STATES
  // const { markedDates, setMarkedDates } = useCalendar();
  // const [isCreating, setIsCreating] = React.useState(false);
  // const { appointments, setAppointments } = useCalendar();
  const [nameValue, setNameValue] = React.useState('nothing');
  const [appointmentHour, setAppointmentHour] = React.useState();
  const [appointmentDescription, setAppointmentDescription] = React.useState(
    ''
  );

  // FUNCTIONS
  function handleSubmit() {
    console.log('enviado');
    //   const dispatchSubmit = async () => {
    //     // console.log('dia', selected);
    //     // console.log('hora', data.schedule);
    //     console.log(appointmentHour);
    //     const concat = parseISO(`${`${date}T${appointmentHour}:00.000Z`}`);
    //     setIsCreating(true);
    //     await createAppointment(concat, appointmentDescription, userId).then(
    //       (response) => {
    //         setAppointments([...appointments, response.data]);
    //         setMarkedDates([...markedDates, date]);
    //         navigation.navigate('Calendar');
    //       }
    //     );
    //     setIsCreating(false);
    //   };
    //   try {
    //     dispatchSubmit();
    //   } catch (err) {
    //     console.log(err);
    //   }
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

            {/* <Input
            name="schedule"
            title="Horário"
            placeholder="Horário para o agendamento"
          /> */}

            <TextInputMask
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

            <Input
              name="description"
              title="Descrição"
              placeholder="Descrição para o agendamento"
              onChangeText={(text) => {
                setAppointmentDescription(text);
              }}
            />

            <Button
              // isLoading={isCreating}
              onPress={() => {
                handleSubmit();
              }}
            >
              <ButtonText>Marcar horário</ButtonText>
            </Button>
          </Form>
        </ScrollView>
      </Container>
    </>
  );
};

export default CreateAppointment;
