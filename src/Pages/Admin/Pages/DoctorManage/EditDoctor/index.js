import { Link } from 'react-router-dom';
import './EditDoctor.scss';
import React, { useState } from 'react';
import Ckeditor from '../../../Component/CkEditor/CkEditor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditDoctor() {
    const [avatarPreview, setAvatarPreview] = useState(null); // Trạng thái cho preview ảnh
    const [selectedFile, setSelectedFile] = useState(null); // Trạng thái lưu trữ file ảnh
    const [doctorName, setDoctorName] = useState(''); // Trạng thái cho tên bác sĩ
    const [email, setEmail] = useState(''); // Trạng thái cho email
    const [address, setAddress] = useState(''); // Trạng thái cho địa chỉ
    const [specialty, setSpecialty] = useState(''); // Trạng thái cho chuyên khoa
    const [editorContent, setEditorContent] = useState(''); // Trạng thái cho nội dung CKEditor

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

    // Xử lý khi nội dung CKEditor thay đổi
    const handleEditorChange = (data) => {
        setEditorContent(data);
    };

    // Xử lý khi người dùng nhấn nút "Thêm"
    const handleAddDoctor = () => {
        if (!doctorName.trim()) {
            toast.error('Vui lòng nhập tên bác sĩ.');
        } else if (!email.trim()) {
            toast.error('Vui lòng nhập email.');
        } else if (!address.trim()) {
            toast.error('Vui lòng nhập tên phòng khám.');
        } else if (!specialty.trim()) {
            toast.error('Vui lòng chọn chuyên khoa.');
        } else if (!editorContent.trim()) {
            toast.error('Vui lòng nhập chi tiết bác sĩ.');
        } else {
            toast.success('Bác sĩ đã được thêm thành công.');
            // Clear form fields after success (optional)
            setDoctorName('');
            setEmail('');
            setAddress('');
            setSpecialty('');
            setSelectedFile(null);
            setAvatarPreview(null);
            setEditorContent('');
        }
    };

    return (
        <div className="adddoctor">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Sửa bác sĩ</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Sửa bác sĩ</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 form-group">
                    <label>Tên bác sĩ: </label>
                    <input
                        className="form-control"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                    />
                </div>
                <div className="col-lg-8 form-group">
                    <label>Thông tin giới thiệu: </label>
                    <textarea className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 form-group">
                    <label>Email: </label>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <label>SĐT: </label>
                    <input className="form-control" />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Tên phòng khám: </label>
                    <input className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Địa chỉ: </label>
                    <input className="form-control" />
                </div>
                <div className="col-lg-4 form-group">
                    <label>Chuyên khoa:</label>
                    <select className="form-control" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                        <option value="">--Chọn chuyên khoa--</option>
                        <option value="Xương khớp">Xương khớp</option>
                        <option value="Thần kinh">Thần kinh</option>
                        <option value="Tiêu hóa">Tiêu hóa</option>
                        <option value="Tim mạch">Tim mạch</option>
                        <option value="Tai mũi họng">Tai mũi họng</option>
                        <option value="Cột sống">Cột sống</option>
                        <option value="Da liễu">Da liễu</option>
                    </select>
                </div>
                <div className="col-lg-4 form-group">
                    <label>Chức vị:</label>
                    <select className="form-control">
                        <option value="">--Chọn chức vị--</option>
                        <option value="Thạc sĩ">Thạc sĩ</option>
                        <option value="Tiến sĩ">Tiến sĩ</option>
                        <option value="Giáo sư">Giáo sư</option>
                    </select>
                </div>
                {/* Hiển thị file ảnh đại diện */}
                <div className="col-lg-4 form-group">
                    <label>Ảnh đại diện</label>
                    <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
                    {/* Hiển thị preview nếu có ảnh được chọn */}
                    {avatarPreview && (
                        <div className="avatar-preview">
                            <img src={avatarPreview} alt="Ảnh đại diện" className="img-thumbnail" />
                        </div>
                    )}
                </div>
                <div className="col-lg-12">
                    <label>Chi tiết: </label>
                    <Ckeditor data={editorContent} onEvent={handleEditorChange} />
                </div>
            </div>
            <button className="btn bg-primary-light" style={{ margin: '15px 15px 0 0px' }} onClick={handleAddDoctor}>
                Lưu chỉnh sửa
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

export default EditDoctor;
