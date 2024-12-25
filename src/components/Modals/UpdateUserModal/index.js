import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './UpdateUserModal.scss';

function UpdateUserModal({ show, handleClose }) {
    const [avatarPreview, setAvatarPreview] = useState(null); // State for avatar preview
    const [selectedFile, setSelectedFile] = useState(null); // State for storing the selected file

    // Initial state for form fields
    const [email, setEmail] = useState('Phuoctmdu@gmail.com');
    const [lastName, setLastName] = useState('Lê');
    const [firstName, setFirstName] = useState('Phước');
    const [address, setAddress] = useState('Bình Dương');
    const [phone, setPhone] = useState('02354894545');
    const [gender, setGender] = useState('Nam'); // State for gender selection

    // Handle file selection and image preview
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result); // Set preview image
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật hồ sơ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="update__user">
                        <div className="row">
                            <div className="col-lg-6 form-group">
                                <label>Email: </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update email value
                                />
                            </div>
                            <div className="col-lg-6 form-group">
                                <label>Họ: </label>
                                <input
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} // Update last name
                                />
                            </div>
                            <div className="col-lg-6 form-group">
                                <label>Tên: </label>
                                <input
                                    className="form-control"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} // Update first name
                                />
                            </div>
                            <div className="col-lg-6 form-group">
                                <label>Địa chỉ:</label>
                                <input
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)} // Update address
                                />
                            </div>
                            <div className="col-lg-3 form-group">
                                <label>SĐT:</label>
                                <input
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} // Update phone number
                                />
                            </div>
                            <div className="col-lg-3 form-group">
                                <label>Giới tính:</label>
                                <select
                                    className="form-control"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)} // Update gender
                                >
                                    <option value="">--Chọn giới tính--</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>

                            {/* Avatar upload */}
                            <div className="col-lg-6 form-group">
                                <label>Ảnh đại diện:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                {avatarPreview && (
                                    <div className="avatar-preview">
                                        <img src={avatarPreview} alt="Avatar" className="img-thumbnail" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateUserModal;
