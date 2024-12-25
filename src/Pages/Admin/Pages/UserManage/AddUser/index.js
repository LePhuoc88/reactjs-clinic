import './AddUser.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUser() {
    const [avatarPreview, setAvatarPreview] = useState(null); // State for avatar preview
    const [selectedFile, setSelectedFile] = useState(null); // State for selected file
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [name, setName] = useState(''); // State for name
    const [role, setRole] = useState(''); // State for role

    // Handle file change for avatar
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result); // Create preview for avatar
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission and validations
    const handleAddUser = () => {
        if (!email.trim()) {
            toast.error('Vui lòng nhập email.');
        } else if (!password.trim()) {
            toast.error('Vui lòng nhập mật khẩu.');
        } else if (!name.trim()) {
            toast.error('Vui lòng nhập tên.');
        } else if (!role.trim()) {
            toast.error('Vui lòng chọn vai trò.');
        } else {
            toast.success('Người dùng đã được thêm thành công.');
            // Clear form fields after success (optional)
            setEmail('');
            setPassword('');
            setName('');
            setRole('');
            setSelectedFile(null);
            setAvatarPreview(null);
        }
    };

    return (
        <div className="adduser">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Thêm người dùng</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Thêm người dùng</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 form-group">
                    <label>Email: </label>
                    <input
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email
                        placeholder="Nhập Email"
                        type="email"
                    />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Mật khẩu: </label>
                    <input
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password
                        placeholder="Nhập mật khẩu"
                        type="password"
                    />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Tên: </label>
                    <input
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Update name
                        placeholder="Nhập tên"
                    />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Giới tính:</label>
                    <select className="form-control">
                        <option value="">--Chọn giới tính--</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>
                <div className="col-lg-4 form-group">
                    <label>Số điện thoại: </label>
                    <input className="form-control" placeholder="Nhập số điện thoại" />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Địa chỉ: </label>
                    <input className="form-control" placeholder="Nhập địa chỉ" />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Vai trò:</label>
                    <select
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)} // Update role
                    >
                        <option value="">--Chọn vai trò--</option>
                        <option value="Admin">Admin</option>
                        <option value="Bác sĩ">Bác sĩ</option>
                        <option value="Bệnh nhân">Bệnh nhân</option>
                    </select>
                </div>
                {/* <div className="col-lg-4 form-group">
                    <label>Chức vị:</label>
                    <select className="form-control">
                        <option value="">--Chọn chức vị--</option>
                        <option value="Thạc sĩ">Thạc sĩ</option>
                        <option value="Tiến sĩ">Tiến sĩ</option>
                        <option value="Giáo sư">Giáo sư</option>
                        <option value="Giáo sư">Khác</option>
                    </select>
                </div> */}
                <div className="col-lg-4 form-group">
                    <label>Ảnh đại diện</label>
                    <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
                    {/* Display preview if an avatar is selected */}
                    {avatarPreview && (
                        <div className="avatar-preview">
                            <img src={avatarPreview} alt="Ảnh đại diện" className="img-thumbnail" />
                        </div>
                    )}
                </div>
            </div>
            <button
                className="btn bg-primary-light"
                style={{ margin: '15px 15px 0 0px' }}
                onClick={handleAddUser} // Validate and trigger toast notifications
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

export default AddUser;
