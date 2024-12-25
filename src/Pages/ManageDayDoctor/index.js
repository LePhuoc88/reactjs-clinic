import { Link } from 'react-router-dom';
import './ManageDayDoctor.scss';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

function ManageDayDoctor() {
    // State to store the selected time slots for each date
    const [daySelections, setDaySelections] = useState({});
    const [selectedDate, setSelectedDate] = useState(''); // Track the currently selected date
    const [selectedTimes, setSelectedTimes] = useState([]); // Track the time slots for the current date

    // Function to handle time slot selection/deselection
    const handleTimeToggle = (time) => {
        if (selectedTimes.includes(time)) {
            setSelectedTimes(selectedTimes.filter((t) => t !== time));
        } else {
            setSelectedTimes([...selectedTimes, time]);
        }
    };

    // Function to handle date change
    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);

        // Check if the new date has saved time slots, if so load them, otherwise reset
        if (daySelections[newDate]) {
            setSelectedTimes(daySelections[newDate]);
        } else {
            setSelectedTimes([]);
        }
    };

    // Function to save the selected time slots for the selected date
    const handleSave = () => {
        if (selectedDate) {
            if (selectedTimes.length === 0) {
                toast.error('Vui lòng chọn giờ trong ngày.');
            } else {
                // Save the selected times for the selected date
                setDaySelections({ ...daySelections, [selectedDate]: selectedTimes });
                toast.success(`Thời gian ${selectedDate} đã được lưu.`); // Show success toast
            }
        } else {
            toast.error('Vui lòng chọn ngày để lưu các khoảng thời gian.'); // Show error toast for missing date
        }
    };

    // Array of time slots for easier management
    const timeSlots = [
        '08:00 - 09:00',
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '16:00 - 17:00',
    ];

    return (
        <div className="managedaydoctor">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý kế hoạch khám bệnh của bác sĩ</p>
                </div>
            </div>
            <div className="doctor__title">
                <h2>Quản lý kế hoạch khám bệnh của bác sĩ</h2>
            </div>
            <div className="choose__day">
                <p>Chọn ngày:</p>
                <input type="date" value={selectedDate} onChange={handleDateChange} />
            </div>
            <div className="doctor__calendar_hour">
                {timeSlots.map((time) => (
                    <button
                        key={time}
                        className={`doctor__calendar_hour_content ${selectedTimes.includes(time) ? 'selected' : ''}`}
                        onClick={() => handleTimeToggle(time)} // Toggle the clicked time slot
                    >
                        {time}
                    </button>
                ))}
            </div>
            <button className="btn bg-primary-light" onClick={handleSave}>
                Lưu thông tin
            </button>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default ManageDayDoctor;
