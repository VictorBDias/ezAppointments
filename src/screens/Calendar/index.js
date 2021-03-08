// IMPORTS

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Calendar, LocaleConfig } from 'react-native-calendars';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { parseISO } from 'date-fns';

// CUSTOM IMPORTS
import {
  Container,
  AppointmentList,
  DayShow,
  WeekDayText,
  AppointmentCard,
} from './styles';
import Typography from '~/components/Typography';
import colors from '~/styles/colors';
import Header from '~/components/Header';
// import { useCalendar } from '~/hooks/stacks/calendarScreen';
// import OptionsModal from '~/components/utils/OptionsModal';

// APIS
// import { getAllAppointments, deleteAppointment } from '~/apis/admin/calendar';

const CalendarScreen = () => {
  const navigation = useNavigation();
  // const { appointments, setAppointments } = useCalendar();
  // const { markedDates, setMarkedDates } = useCalendar();

  const [appointments, setAppointments] = useState([
    {
      id: 0,
      date: '2021-03-07T12:40:00.000Z',
      status: 'active',
      type: 'service',
      user_id: null,
      created_at: '2021-02-07 22:38:19',
      updated_at: '2021-02-07 22:38:19',
      description:
        'teste de responsividade, teste de responsividade, teste de responsividade teste de responsividade teste de responsividade teste de responsividade teste de responsividadeteste de responsividadeteste de responsividadeteste de responsividadeteste de responsividadeteste de responsividadeteste de responsividadeteste de responsividadeteste de responsividade ',
      user: null,
    },
    {
      id: 1,
      date: '2021-03-17T15:00:00.000Z',
      status: 'active',
      type: 'service',
      user_id: null,
      created_at: '2021-02-08 13:55:31',
      updated_at: '2021-02-08 13:55:31',
      description: 'meia noite - yma ',
      user: null,
    },
    {
      id: 2,
      date: '2021-04-13T11:00:00.000Z',
      status: 'active',
      type: 'service',
      user_id: 1,
      created_at: '2021-02-10 14:14:08',
      updated_at: '2021-02-10 14:14:08',
      description: 'Blaack ',
      user: null,
    },
  ]);
  const [markedDates, setMarkedDates] = useState([
    '2021-03-07',
    '2021-03-17',
    '2021-04-13',
  ]);

  LocaleConfig.locales.br = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul.',
      'Ago',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ],
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  };
  LocaleConfig.defaultLocale = 'br';

  // STATES
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [selectedShow, setSelectedShow] = useState('');
  const [selected, setSelected] = useState('2021-03-07');
  const [appointmentId, setAppointmentId] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  // useEffect(() => {
  //   const fetch = async () => {
  //     await getAllAppointments().then((response) => {
  //       setAppointments(response.data);
  //       const auxArray = response.data.map((appointment) => {
  //         return appointment.date.split('T')[0];
  //       });
  //       setMarkedDates(auxArray);
  //       setIsLoaded(true);
  //     });
  //   };
  //   fetch();
  // }, []);

  const onDayPress = (day) => {
    setSelected(day.dateString);
    setSelectedShow(day.dateString.split('-'));
  };

  function showWeekday() {
    const weekday = new Array(7);
    weekday[0] = 'Domingo';
    weekday[1] = 'Segunda-feira';
    weekday[2] = 'Terça-feira';
    weekday[3] = 'Quarta-feira';
    weekday[4] = 'Quinta-feira';
    weekday[5] = 'Sexta-feira';
    weekday[6] = 'Sábado';
    const date = selected;
    const parsedDate = parseISO(date);
    return weekday[parsedDate.getDay()];
  }

  // eslint-disable-next-line consistent-return
  const renderAppointments = (appointment) => {
    if (
      // isLoaded &&
      appointment !== null &&
      appointment.date.split('T')[0] === selected
    ) {
      return (
        <TouchableOpacity
          onLongPress={() => {
            setAppointmentId(appointment.id);
            setShowModal(true);
          }}
        >
          <AppointmentCard>
            <Card.Content>
              <Title>{`${appointment.date.split('T')[1].split(':')[0]}:${
                appointment.date.split('T')[1].split(':')[1]
              }`}</Title>
              <Paragraph>{appointment.description}</Paragraph>
            </Card.Content>
          </AppointmentCard>
        </TouchableOpacity>
      );
    }

    // <Loader size="large" />;
  };

  // const handleAppointmentDelete = async () => {
  //   setShowModal(false);
  //   setIsDeleting(true);

  //   await deleteAppointment({ appointmentId }).then(() => {
  //     const auxArray = appointments;

  //     const filteredArray = auxArray.filter((obj) => obj.id !== appointmentId);

  //     setAppointments(filteredArray);
  //   });

  //   setIsDeleting(false);
  // };

  function markDates() {
    const newDaysObject = {};
    markedDates.forEach((marked) => {
      newDaysObject[marked] = {
        marked: true,
        dotColor: colors.primary,
      };
    });
    return newDaysObject;
  }

  // eslint-disable-next-line consistent-return
  function renderDay() {
    if (selected !== '') {
      return (
        <>
          <Container>
            <DayShow>
              <Typography type="white">{selectedShow[2]}</Typography>
            </DayShow>
            <WeekDayText>{showWeekday()}</WeekDayText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('userList', { selected });
              }}
            >
              <MaterialIcons
                name="add-circle"
                size={24}
                color={colors.black50}
              />
            </TouchableOpacity>
          </Container>
          <AppointmentList>
            {appointments.map((appointment) => renderAppointments(appointment))}
          </AppointmentList>
        </>
      );
    }
  }

  return (
    <>
      <Header
        title="Calendario"
        iconLeft="menu"
        openSideMenu={navigation.openDrawer}
      />
      <ScrollView>
        <Calendar
          theme={{
            dayTextColor: colors.black,
            todayTextColor: colors.primary,
            arrowColor: colors.primary,
            disabledArrowColor: colors.black,
          }}
          onDayPress={onDayPress}
          onDayLongPress={(day) => {
            console.log(day);
          }}
          // onMonthChange={(month) => {}}
          monthFormat="MMMM yyyy"
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          enableSwipeMonths
          markingType="custom"
          markedDates={markDates()}
        />

        {renderDay()}
        {/* <OptionsModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          title="Escolha uma opção"
          options={[
            {
              name: 'Cancelar agendamento',
              icon: 'delete',
              // onPress: handleAppointmentDelete,
              color: colors.error,
            },
          ]}
        /> */}
      </ScrollView>
    </>
  );
};

export default CalendarScreen;
