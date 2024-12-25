import './AddSpecialty.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ckeditor from '../../../Component/CkEditor/CkEditor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddSpecialty() {
    const [avatarPreview, setAvatarPreview] = useState(null); // Trạng thái cho preview ảnh
    const [selectedFile, setSelectedFile] = useState(null); // Trạng thái lưu trữ file ảnh
    const [specialtyName, setSpecialtyName] = useState(''); // Trạng thái cho tên chuyên khoa
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
    const handleAddSpecialty = () => {
        if (!specialtyName.trim()) {
            toast.error('Vui lòng nhập tên chuyên khoa.');
        } else if (!selectedFile) {
            toast.error('Vui lòng chọn ảnh đại diện.');
        } else if (!editorContent.trim()) {
            toast.error('Vui lòng nhập chi tiết chuyên khoa.');
        } else {
            toast.success('Chuyên khoa đã được thêm thành công.');
            // Clear form fields after success (optional)
            setSpecialtyName('');
            setSelectedFile(null);
            setAvatarPreview(null);
            setEditorContent('');
        }
    };

    return (
        <div className="addspecialty">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Thêm chuyên khoa</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Thêm chuyên khoa</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 form-group">
                    <label>Tên chuyên khoa: </label>
                    <input
                        className="form-control"
                        value={specialtyName}
                        onChange={(e) => setSpecialtyName(e.target.value)} // Update specialty name
                        placeholder="Nhập tên chuyên khoa"
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
                <div className="col-lg-12">
                    <label>Chi tiết: </label>
                    <Ckeditor data={editorContent} onEvent={handleEditorChange} />
                </div>
            </div>
            <button
                className="btn bg-primary-light"
                style={{ margin: '15px 15px 0 0px' }}
                onClick={handleAddSpecialty} // Validate and trigger toast notifications
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

export default AddSpecialty;
