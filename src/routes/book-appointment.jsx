import React, { useState } from "react";
import Header from "../components/header/Header.jsx";
import "../css/sections/book-appointment.css";

const HOURS = ["9:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30"];
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getToday() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export default function BookAppointment() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState({});
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
  const slots = bookings[selectedDate] || [];

  function isSlotBooked(hour) {
    return slots.some(b => b.hour === hour);
  }

  function userHasBooking() {
    return slots.some(b => b.name === user);
  }

  function handleBook() {
    if (!user) {
      setMessage("Please enter your name to book.");
      return;
    }
    if (userHasBooking()) {
      setMessage("You already have an appointment for this day.");
      return;
    }
    if (!selectedTime) {
      setMessage("Please select a time slot.");
      return;
    }
    if (isSlotBooked(selectedTime)) {
      setMessage("This slot is already booked.");
      return;
    }
    setBookings(prev => ({
      ...prev,
      [selectedDate]: [...slots, { name: user, hour: selectedTime }]
    }));
    setMessage("Appointment booked for " + selectedTime + ".");
    setSelectedTime(null);
  }

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 7 : day;
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  let days = [];
  for (let i = firstDay - 1; i > 0; i--) {
    days.push({ day: prevMonthDays - i + 1, isCurrentMonth: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const isPastDate = dateStr < todayDate;
    const isBookedDate = bookings[dateStr] && bookings[dateStr].length >= HOURS.length;
    days.push({ day: i, isCurrentMonth: true, isPastDate, isBookedDate });
  }
  let nextDay = 1;
  while (days.length < 42) {
    days.push({ day: nextDay, isCurrentMonth: false });
    nextDay++;
  }

  return (
    <>
      <div className="book-appointment-menu">
  <Header showMenu={showMenu} onToggleMenu={() => setShowMenu((prev) => !prev)} showLogo={false} />
</div>
      <main style={{ maxWidth: '900px', margin: '100px auto 0 auto', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'stretch' }} className="md:flex-row md:gap-12 md:items-start md:flex">
          {/* Calendar/Date Selection */}
          <section aria-labelledby="date-selection-label" style={{ flex: 1 }}>
            <h2 id="date-selection-label" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#212529' }}>Book an Appointment</h2>
            <div style={{ background: '#f0f4f8', borderRadius: '10px', padding: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <label htmlFor="month-select" className="visually-hidden">Select Month</label>
                <select
                  id="month-select"
                  value={monthNames[currentMonth]}
                  onChange={e => setCurrentMonth(monthNames.indexOf(e.target.value))}
                  aria-label="Select Month"
                  style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #212529', color: '#212529' }}
                >
                  {monthNames.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <label htmlFor="year-select" className="visually-hidden">Select Year</label>
                <select
                  id="year-select"
                  value={currentYear}
                  onChange={e => setCurrentYear(Number(e.target.value))}
                  aria-label="Select Year"
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #212529', color: '#212529' }}
                >
                  {Array.from({ length: 10 }, (_, i) => currentYear + i).map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div role="grid" aria-label="Calendar for selecting appointment date" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center', fontWeight: 'bold', color: '#212529', marginBottom: '5px' }}>
                {weekDays.map(day => (
                  <div key={day} role="columnheader">{day}</div>
                ))}
              </div>
              <div role="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
                {days.map((d, index) => {
                  const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`;
                  const isPastOrBooked = (d.isPastDate || d.isBookedDate) && d.isCurrentMonth;
                  return (
                    <button
                      key={index}
                      role="gridcell"
                      aria-label={`${d.isCurrentMonth ? 'Current month' : 'Adjacent month'} ${d.day}, ${monthNames[currentMonth]} ${currentYear}${isPastOrBooked ? ', unavailable' : ''}`}
                      aria-selected={d.day === selectedDay && d.isCurrentMonth && !isPastOrBooked}
                      aria-disabled={isPastOrBooked || !d.isCurrentMonth}
                      onClick={() => !isPastOrBooked && d.isCurrentMonth && setSelectedDay(d.day)}
                      className="calendar-day"
                      style={{
                        cursor: d.isCurrentMonth && !isPastOrBooked ? 'pointer' : 'default',
                        color: d.isCurrentMonth ? '#212529' : '#adb5bd',
                        background: (d.day === selectedDay && d.isCurrentMonth && !isPastOrBooked) ? '#0d6efd' : 'transparent',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        lineHeight: '35px',
                        margin: 'auto',
                        fontSize: '14px',
                        border: 'none',
                        color: (d.day === selectedDay && d.isCurrentMonth && !isPastOrBooked) ? '#fff' : '',
                        opacity: isPastOrBooked ? 0.5 : 1,
                      }}
                    >
                      {d.day}
                    </button>
                  );
                })}
              </div>
            </div>
            <label id="name-input-label" htmlFor="user-name" style={{ display: 'block', marginTop: '20px', marginBottom: '20px' }}>
              Your Name:
              <input
                id="user-name"
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
                aria-required="true"
                style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #212529', marginTop: '5px', color: '#212529' }}
              />
            </label>
          </section>
          {/* Time Slot Selection */}
          <section aria-labelledby="time-selection-label" style={{ flex: 1 }}>
            <h2 id="time-selection-label" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#212529' }}>Pick a Time</h2>
            <div style={{ background: '#f0f4f8', borderRadius: '10px', padding: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div role="radiogroup" aria-label="Select appointment time" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {HOURS.map(hour => {
                  const booked = isSlotBooked(hour);
                  const isSelected = selectedTime === hour;
                  return (
                    <button
                      key={hour}
                      role="radio"
                      aria-checked={isSelected}
                      disabled={booked || userHasBooking()}
                      onClick={() => setSelectedTime(hour)}
                      className="time-slot"
                      aria-label={`${hour}${booked ? ', booked' : ''}`}
                      style={{
                        background: booked ? '#6c757d' : isSelected ? '#0d6efd' : '#e7f1ff',
                        color: booked ? '#fff' : isSelected ? '#fff' : '#0d6efd',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px',
                        fontSize: '14px',
                        cursor: (booked || userHasBooking()) ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {hour} {booked ? '(Booked)' : ''}
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                onClick={handleBook}
                aria-label="Confirm appointment booking"
                style={{
                  background: '#0d6efd',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Continue
              </button>
            </div>
            {message && (
              <div role="alert" style={{ marginTop: '20px', color: '#198754', fontWeight: 'bold' }}>
                {message}
              </div>
            )}
          </section>
        </div>
        <section aria-labelledby="bookings-label">
          <h2 id="bookings-label" style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '30px', color: '#212529' }}>Today's Bookings</h2>
          <ul style={{ listStyle: 'none', padding: 0, color: '#212529' }}>
            {slots.length === 0 && <li>No bookings yet.</li>}
            {slots.map((b, i) => (
              <li key={i}>{b.hour} - {b.name}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}