import { Link } from 'react-router-dom';
import './CalendarManage.scss';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CalendarManage() {
    const [doctor, setDoctor] = useState(''); // Track the selected doctor
    const [daySelections, setDaySelections] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTimes, setSelectedTimes] = useState([]);

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

    // Function to handle doctor selection change
    const handleDoctorChange = (event) => {
        setDoctor(event.target.value);
    };

    // Function to save the selected time slots for the selected date and doctor
    const handleSave = () => {
        if (!doctor) {
            toast.error('Vui lòng chọn bác sĩ.'); // Show error if no doctor selected
        } else if (!selectedDate) {
            toast.error('Vui lòng chọn ngày để lưu các khoảng thời gian.'); // Show error if no date selected
        } else if (selectedTimes.length === 0) {
            toast.error('Vui lòng chọn ít nhất một giờ trong ngày.'); // Show error if no time slots selected
        } else {
            // Save the selected times for the selected date
            setDaySelections({ ...daySelections, [selectedDate]: selectedTimes });
            toast.success(`Thời gian cho ${selectedDate} của ${doctor} đã được lưu.`); // Show success toast
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
        <div className="calendarmanage">
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
            <div className="row">
                <div className="col-lg-4 form-group">
                    <label>Chọn bác sĩ: </label>
                    <select className="form-control" value={doctor} onChange={handleDoctorChange}>
                        <option value="">--Chọn bác sĩ--</option>
                        <option value="BSCKI Võ Thị Ngọc Thu">BSCKI Võ Thị Ngọc Thu</option>
                        <option value="Thạc sĩ, Bác sĩ Nguyễn Văn Nghị">Thạc sĩ, Bác sĩ Nguyễn Văn Nghị</option>
                        <option value="BSCKII Dương Minh Trí">BSCKII Dương Minh Trí</option>
                        <option value="BSCKII Kim Văn Trung">BSCKII Kim Văn Trung</option>
                        <option value="Tiến sĩ, Bác sĩ Nguyễn Diệu Linh">Tiến sĩ, Bác sĩ Nguyễn Diệu Linh</option>
                    </select>
                </div>
                <div className="col-lg-3 form-group">
                    <label>Chọn ngày: </label>
                    <input className="form-control" type="date" value={selectedDate} onChange={handleDateChange} />
                </div>
            </div>
            <div className="doctor__calendar_hour">
                {timeSlots.map((time) => (
                    <button
                        key={time}
                        className={`doctor__calendar_hour_content ${selectedTimes.includes(time) ? 'selected' : ''}`}
                        onClick={() => handleTimeToggle(time)}
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
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default CalendarManage;
