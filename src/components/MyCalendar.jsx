import { useState } from "react";
import Calendar from "react-calendar";

const MyCalendar = () => {
  const [value, onChange, activeStartDate, today, defaultValue] = useState(
    new Date()
  );
  return (
    <Calendar
      activeStartDate={activeStartDate}
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
      calendarType="US"
      showWeekNumbers
      today={today}
    />
  );
};

export default MyCalendar;
