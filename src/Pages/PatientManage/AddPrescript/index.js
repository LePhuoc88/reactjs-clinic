import React, { useState } from 'react';
import './AddPrescript.scss';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function AddPrescript() {
    const [prescriptions, setPrescriptions] = useState([]); // State để lưu danh sách thuốc đã chọn

    const options = [
        { value: 'Paracetamol', label: 'Paracetamol' },
        { value: 'Ibuprofen', label: 'Ibuprofen' },
        { value: 'Amoxicillin', label: 'Amoxicillin' },
        { value: 'Metformin', label: 'Metformin' },
        { value: 'Aspirin', label: 'Aspirin' },
    ];

    // Hàm xử lý khi chọn thuốc
    const handleMedicineChange = (selectedOption) => {
        // Kiểm tra xem thuốc đã được chọn chưa
        const isMedicineSelected = prescriptions.some((prescription) => prescription.name === selectedOption.value);

        if (isMedicineSelected) {
            // Hiển thị thông báo nếu thuốc đã được chọn
            toast.error('Thuốc đã có, vui lòng chọn thuốc khác.');
        } else {
            // Thêm thuốc vào danh sách nếu chưa có
            setPrescriptions([
                ...prescriptions,
                { name: selectedOption.value, type: '', quantity: '', instruction: '' },
            ]);
        }
    };

    // Hàm xử lý khi xóa thuốc
    const handleDeletePrescription = (index) => {
        const newPrescriptions = prescriptions.filter((_, i) => i !== index);
        setPrescriptions(newPrescriptions);
    };

    // Hàm xử lý cập nhật các trường trong đơn thuốc
    const handleUpdatePrescription = (index, field, value) => {
        const updatedPrescriptions = prescriptions.map((prescription, i) =>
            i === index ? { ...prescription, [field]: value } : prescription,
        );
        setPrescriptions(updatedPrescriptions);
    };

    // Hàm xử lý khi nhấn "Gửi đơn thuốc"
    const handleSubmit = () => {
        // Kiểm tra nếu chưa chọn thuốc
        if (prescriptions.length === 0) {
            toast.error('Bạn chưa chọn thuốc.');
            return;
        }

        // Kiểm tra nếu có thuốc chưa nhập số lượng
        const invalidPrescription = prescriptions.some((prescription) => !prescription.quantity);

        if (invalidPrescription) {
            toast.error('Vui lòng nhập số lượng thuốc.');
        } else {
            toast.success('Gửi đơn thuốc thành công!');
            // Thêm logic gửi đơn thuốc tại đây (nếu cần)
        }
    };

    return (
        <div className="addprescript">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Tạo đơn thuốc</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Tạo đơn thuốc</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 form-group">
                    <label>Email bệnh nhân: </label>
                    <input className="form-control" value="phuoctdmu@gmail.com" type="email" readOnly />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Tên bệnh nhân: </label>
                    <input className="form-control" value="Lê Tấn Phước" readOnly />
                </div>

                <div className="col-lg-4 form-group">
                    <label>Chọn thuốc:</label>
                    <Select
                        options={options}
                        onChange={handleMedicineChange} // Xử lý chọn thuốc
                    />
                </div>
            </div>
            <div className="prescript">
                <h4>Đơn thuốc</h4>
                {prescriptions.map((prescription, index) => (
                    <div className="prescript__content" key={index}>
                        <input className="prescript__content_name" value={prescription.name} readOnly />

                        <input
                            className="prescript__content_many"
                            placeholder="Số lượng"
                            value={prescription.quantity}
                            onChange={(e) => handleUpdatePrescription(index, 'quantity', e.target.value)}
                        />
                        <select
                            className="prescript__content_type"
                            value={prescription.type}
                            onChange={(e) => handleUpdatePrescription(index, 'type', e.target.value)}
                        >
                            <option value="Viên">Viên</option>
                            <option value="Chai">Chai</option>
                            <option value="Tuýp">Tuýp</option>
                        </select>
                        <input
                            className="prescript__content_instruct"
                            placeholder="Nhập hướng dẫn sử dụng..."
                            value={prescription.instruction}
                            onChange={(e) => handleUpdatePrescription(index, 'instruction', e.target.value)}
                        />
                        <button
                            className="btn bg-danger-light"
                            style={{ padding: '5px 10px' }}
                            onClick={() => handleDeletePrescription(index)}
                        >
                            <RiDeleteBin5Fill style={{ fontSize: '20px' }} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="col-lg-12 form-group" style={{ marginTop: '20px' }}>
                <label>Thông tin mô tả thêm: </label>
                <textarea className="form-control" />
            </div>
            <button className="btn bg-primary-light" style={{ margin: '15px 15px 0 0px' }} onClick={handleSubmit}>
                Gửi đơn thuốc
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

export default AddPrescript;
