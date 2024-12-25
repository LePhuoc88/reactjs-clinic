import './UserInfo.scss';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/Logo/avatar.jpg';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaEdit } from 'react-icons/fa';
import UpdateUserModal from '../../components/Modals/UpdateUserModal';

function UserInfo() {
    const [showPassword, setShowPassword] = useState(false); // Trạng thái hiển thị mật khẩu

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Đảo ngược trạng thái hiển thị mật khẩu
    };

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="useinfo">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Thiết lập</p>
                </div>
            </div>
            <div className="doctor__title">
                <h2>Tài khoản</h2>
            </div>
            <div className="useinfo__wrap">
                <div className="useinfo__wrap_img">
                    <img src={avatar} alt="" />
                    <h4>Lê Phước</h4>
                </div>
                <div className="useinfo__wrap_content">
                    <div className="useinfo__wrap_content_item">
                        <h5>Tên: </h5>
                        <p>Lê Phước </p>
                    </div>

                    <div className="useinfo__wrap_content_item">
                        <h5>Giới tính: </h5>
                        <p>Nam</p>
                    </div>
                    <div className="useinfo__wrap_content_item">
                        <h5>SĐT: </h5>
                        <p>03496516585 </p>
                    </div>
                    <div className="useinfo__wrap_content_item">
                        <h5>Địa chỉ: </h5>
                        <p>Bình dương </p>
                    </div>
                    <div className="useinfo__wrap_content_item">
                        <h5>Email: </h5>
                        <p>Phuoctdmu@gmail.com</p>
                    </div>
                    <div className="useinfo__wrap_content_item">
                        <h5>Mật khẩu: </h5>
                        <p className="useinfo__wrap_content_item_pw">123456</p>
                    </div>
                    <button className="useinfo__wrap_content_btn" onClick={handleShow}>
                        <FaEdit />
                        Cập nhật hồ sơ
                    </button>
                </div>
            </div>
            <UpdateUserModal show={show} handleClose={handleClose} />
        </div>
    );
}

export default UserInfo;
