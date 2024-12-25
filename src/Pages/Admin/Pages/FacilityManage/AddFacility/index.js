import './AddFacility.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ckeditor from '../../../Component/CkEditor/CkEditor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddFacility() {
    const [avatarPreview, setAvatarPreview] = useState(null); // Trạng thái cho preview ảnh
    const [selectedFile, setSelectedFile] = useState(null); // Trạng thái lưu trữ file ảnh
    const [facilityName, setFacilityName] = useState(''); // Trạng thái cho tên bệnh viện
    const [address, setAddress] = useState(''); // Trạng thái cho địa chỉ bệnh viện
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
    const handleAddFacility = () => {
        if (!facilityName.trim()) {
            toast.error('Vui lòng nhập tên bệnh viện.');
        } else if (!address.trim()) {
            toast.error('Vui lòng nhập địa chỉ bệnh viện.');
        } else if (!selectedFile) {
            toast.error('Vui lòng chọn ảnh đại diện.');
        } else if (!editorContent.trim()) {
            toast.error('Vui lòng nhập chi tiết bệnh viện.');
        } else {
            toast.success('Bệnh viện đã được thêm thành công.');
            // Clear form fields after success (optional)
            setFacilityName('');
            setAddress('');
            setSelectedFile(null);
            setAvatarPreview(null);
            setEditorContent('');
        }
    };

    return (
        <div className="addfacility">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Thêm bệnh viện</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Thêm bệnh viện</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 form-group">
                    <label>Tên bệnh viện: </label>
                    <input
                        className="form-control"
                        value={facilityName}
                        onChange={(e) => setFacilityName(e.target.value)} // Update facility name
                        placeholder="Nhập tên bệnh viện"
                    />
                </div>
                <div className="col-lg-3 form-group">
                    <label>Ảnh đại diện</label>
                    <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
                    {/* Hiển thị preview nếu có ảnh được chọn */}
                    {avatarPreview && (
                        <div className="avatar-preview">
                            <img src={avatarPreview} alt="Ảnh đại diện" className="img-thumbnail" />
                        </div>
                    )}
                </div>
                <div className="col-lg-6 form-group">
                    <label>Địa chỉ: </label>
                    <input
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} // Update address
                        placeholder="Nhập địa chỉ bệnh viện"
                    />
                </div>
                <div className="col-lg-12">
                    <label>Chi tiết: </label>
                    <Ckeditor data={editorContent} onEvent={handleEditorChange} />
                </div>
            </div>
            <button
                className="btn bg-primary-light"
                style={{ margin: '15px 15px 0 0px' }}
                onClick={handleAddFacility} // Validate and trigger toast notifications
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

export default AddFacility;
