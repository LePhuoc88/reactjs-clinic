import './AddMedication.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddMedication() {
    const [medicationName, setMedicationName] = useState(''); // State to track the input value

    // Handle input change
    const handleInputChange = (event) => {
        setMedicationName(event.target.value);
    };

    // Handle the button click
    const handleAddMedication = () => {
        if (medicationName.trim() === '') {
            // Show error toast if the input is empty
            toast.error('Vui lòng nhập tên thuốc.');
        } else {
            // Show success toast if the input is filled
            toast.success('Thuốc đã được thêm thành công.');
            setMedicationName(''); // Clear the input after success
        }
    };

    return (
        <div className="addmedica">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Thêm thuốc</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Thêm thuốc</h2>
            </div>
            <div className="col-lg-4 form-group">
                <label>Tên thuốc: </label>
                <input
                    className="form-control"
                    value={medicationName}
                    onChange={handleInputChange} // Track input changes
                    placeholder="Nhập tên thuốc"
                />
            </div>
            <button
                className="btn bg-primary-light"
                style={{ margin: '15px 15px 0 0px' }}
                onClick={handleAddMedication} // Trigger the toast on button click
            >
                Thêm
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

export default AddMedication;
