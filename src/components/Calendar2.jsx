import { useState } from "react";
import Calendarr from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar2 = () => {
  const [value, onChange] = useState(new Date());
  return <Calendarr onChange={onChange} value={value} />;
};

export default Calendar2;
