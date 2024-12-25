import './DayDropdown.scss';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegHandPointUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
import BookingModal from '../Modals/BookingModal'; // Import the BookingModal component

const DayDropdown = () => {
    const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    const [daysList, setDaysList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(''); // To track selected time slot

    useEffect(() => {
        const generateNext7Days = () => {
            const days = [];
            const dayNames = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
            const today = new Date();

            for (let i = 0; i < 7; i++) {
                const nextDay = new Date(today);
                nextDay.setDate(today.getDate() + i);
                const dayOfWeek = dayNames[nextDay.getDay()];
                const formattedDate = `${nextDay.getDate()}/${nextDay.getMonth() + 1}`;
                days.push(`${dayOfWeek} - ${formattedDate}`);
            }
            return days;
        };

        const next7Days = generateNext7Days();
        setDaysList(next7Days);
        setSelectedDay(next7Days[0]); // Set the first day as default
    }, []);

    const toggleDayDropdown = () => {
        setIsDayDropdownOpen(!isDayDropdownOpen);
    };

    const handleDaySelection = (day) => {
        setSelectedDay(day);
        setIsDayDropdownOpen(false); // Close dropdown after selection
    };

    const handleShowModal = (timeSlot) => {
        setSelectedTimeSlot(timeSlot); // Set the selected time slot
        setShowModal(true); // Show the modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Hide the modal
    };

    return (
        <>
            <div className="dropdown_day">
                <div className="dropdown_day_content" onClick={toggleDayDropdown}>
                    <p>
                        {selectedDay} <FaAngleDown />
                    </p>
                </div>
                {isDayDropdownOpen && (
                    <ul className="dropdown_day_list">
                        {daysList.map((day, index) => (
                            <li key={index} onClick={() => handleDaySelection(day)}>
                                {day}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="doctor__calendar">
                <FaCalendarAlt />
                <p>LỊCH KHÁM</p>
            </div>
            <div className="doctor__calendar_hour">
                <button className="doctor__calendar_hour_content" onClick={() => handleShowModal('07:00 - 08:00')}>
                    07:00 - 08:00
                </button>
                <button className="doctor__calendar_hour_content" onClick={() => handleShowModal('08:00 - 09:00')}>
                    08:00 - 09:00
                </button>
                <button className="doctor__calendar_hour_content" onClick={() => handleShowModal('09:00 - 10:00')}>
                    09:00 - 10:00
                </button>
                <button className="doctor__calendar_hour_content" onClick={() => handleShowModal('10:00 - 11:00')}>
                    10:00 - 11:00
                </button>
                <button className="doctor__calendar_hour_content" onClick={() => handleShowModal('11:00 - 12:00')}>
                    11:00 - 12:00
                </button>
                <button className="doctor__calendar_hour_content" onClick={() => handleShowModal('12:00 - 13:00')}>
                    12:00 - 13:00
                </button>
            </div>
            <div className="choose">
                <p>
                    Chọn <FaRegHandPointUp /> và đặt (Phí đặt lịch 0đ)
                </p>
            </div>

            {/* Include the modal component */}
            <BookingModal
                show={showModal}
                handleClose={handleCloseModal}
                timeSlot={selectedTimeSlot}
                selectedDay={selectedDay}
            />
        </>
    );
};

export default DayDropdown;
