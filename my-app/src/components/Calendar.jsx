import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="calendar-strip">
      <div 
        className="current-date" 
        onClick={() => setIsCalendarOpen(true)}
      >
        {formatDate(selectedDate)}
      </div>
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          setIsCalendarOpen(false);
        }}
        open={isCalendarOpen}
        onClickOutside={() => setIsCalendarOpen(false)}
        inline
        popperClassName="calendar-popper"
      />
    </div>
  );
};

export default Calendar;