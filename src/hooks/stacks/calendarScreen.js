import React, { createContext, useContext } from 'react';

const CalendarContext = createContext(null);

const CalendarProvider = ({ children }) => {
  //* STATES
  const [appointments, setAppointments] = React.useState([]);
  const [markedDates, setMarkedDates] = React.useState([]);

  return (
    <CalendarContext.Provider
      value={{ appointments, setAppointments, markedDates, setMarkedDates }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendar = () => {
  const context = useContext(CalendarContext);

  if (!context)
    throw new Error('useCalendar can only be used within CalendarProvider');

  return context;
};

export { useCalendar, CalendarProvider };
