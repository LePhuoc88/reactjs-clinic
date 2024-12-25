import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './Register.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng ký
        console.log({ email, password, name, address, gender, phone });
    };

    const handleFacebookLogin = () => {
        // Xử lý logic đăng ký bằng Facebook
        console.log('Register with Facebook');
    };

    const handleGoogleLogin = () => {
        // Xử lý logic đăng ký bằng Google
        console.log('Register with Google');
    };
    //
    const [avatarPreview, setAvatarPreview] = useState(null); // Trạng thái cho preview ảnh
    const [selectedFile, setSelectedFile] = useState(null); // Trạng thái lưu trữ file ảnh

    // Xử lý khi người dùng chọn file ảnh
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result); // Tạo preview của ảnh
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>
                <div className="row">
                    <div className="col-lg-6 form-group">
                        <label>Email: </label>
                        <input className="form-control" type="email" />
                    </div>
                    <div className="col-lg-6 form-group">
                        <label>Họ: </label>
                        <input className="form-control" />
                    </div>
                    <div className="col-lg-6 form-group">
                        <label>Tên: </label>
                        <input className="form-control" required />
                    </div>
                    <div className="col-lg-6 form-group">
                        <label>Địa chỉ:</label>
                        <input className="form-control" />
                    </div>
                    <div className="col-lg-3 form-group">
                        <label>SĐT</label>
                        <input className="form-control" />
                    </div>
                    <div className="col-lg-3 form-group">
                        <label>Giới tính</label>
                        <select className="form-control">
                            <option value="">--Chọn giới tính--</option> {/* Placeholder option */}
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>

                    {/* Hiển thị file ảnh đại diện */}
                    <div className="col-lg-6 form-group">
                        <label>Ảnh đại diện</label>
                        <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
                        {/* Hiển thị preview nếu có ảnh được chọn */}
                        {avatarPreview && (
                            <div className="avatar-preview">
                                <img src={avatarPreview} alt="Ảnh đại diện" className="img-thumbnail" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="register-button">
                        Register
                    </button>
                </div>
                <div className="social-login">
                    <button type="button" className="icon-button facebook" onClick={handleFacebookLogin}>
                        <FaFacebook size={20} />
                    </button>
                    <button type="button" className="icon-button google" onClick={handleGoogleLogin}>
                        <FaGoogle size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
