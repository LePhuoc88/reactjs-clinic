import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserManage.scss';
import React from 'react';
import Table from '../../../../components/Table/table';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdModeEdit, MdAddCircle } from 'react-icons/md';
import DeleteModal from '../../../../components/Modals/DeleteModal';
import bs1 from '../../../../assets/img/doctor/bs2.png';
import bs2 from '../../../../assets/img/doctor/bs3.jpg';

function UserManage() {
    // State for the filters
    const [nameFilter, setNameFilter] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    // Modal state
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const columns = [
        {
            Header: 'STT',
            accessor: 'stt',
        },
        {
            Header: 'Hình ảnh',
            accessor: 'hinhanh',
            Cell: ({ row }) => <img src={row.original.hinhanh} alt="Doctor" className="doctor__image" />,
        },
        {
            Header: 'Tên',
            accessor: 'ten',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Giới tính',
            accessor: 'gioitinh',
        },
        {
            Header: 'Vai trò',
            accessor: 'vaitro',
            Cell: ({ row }) => {
                const role = row.original.vaitro;
                if (role === 'Bác sĩ') {
                    return <button className="btn__doctor">Bác sĩ</button>;
                } else if (role === 'Bệnh nhân') {
                    return <button className="btn__patient">Bệnh nhân</button>;
                } else if (role === 'Admin') {
                    return <button className="btn__admin">Admin</button>;
                }
                return null;
            },
        },
        {
            Header: 'SĐT',
            accessor: 'sdt',
        },
        {
            Header: 'Địa chỉ',
            accessor: 'diachi',
        },
        {
            accessor: 'hanhdong',
            Cell: ({ row }) => (
                <div className="action">
                    <button className="btn btn-sm bg-success-light mg__right">
                        Sửa <MdModeEdit />
                    </button>
                    <button className="btn btn-sm bg-danger-light" onClick={() => handleDeleteClick(row.original)}>
                        Xóa <FaRegTrashAlt />
                    </button>
                </div>
            ),
        },
    ];

    const data = [
        {
            stt: '1',
            hinhanh: bs1,
            ten: 'Nguyễn Minh Trí',
            gioitinh: 'Nam',
            vaitro: 'Bác sĩ',
            email: 'Tri@gmail.com',
            sdt: '06486519844',
            diachi: 'TP HCM',
        },
        {
            stt: '2',
            hinhanh: bs2,
            ten: 'Nguyễn Minh Tài',
            gioitinh: 'Nữ',
            vaitro: 'Bệnh nhân',
            email: 'Tai@gmail.com',
            sdt: '06486519844',
            diachi: 'TP HCM',
        },
        {
            stt: '3',
            hinhanh: bs1,
            ten: 'Nguyễn Minh Tạ',
            gioitinh: 'Nam',
            vaitro: 'Admin',
            email: 'Ta@gmail.com',
            sdt: '06486519844',
            diachi: 'TP HCM',
        },
    ];

    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/quan-ly-nguoi-dung/them-nguoi-dung');
    };

    const filteredData = data.filter((user) => {
        const nameMatch = user.ten.toLowerCase().includes(nameFilter.toLowerCase());
        const roleMatch = roleFilter === '' || user.vaitro === roleFilter;
        const genderMatch = genderFilter === '' || user.gioitinh === genderFilter;
        return nameMatch && roleMatch && genderMatch;
    });

    // Handle delete button click
    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setShowDeleteModal(false);
        setUserToDelete(null);
    };

    // Handle modal confirm (delete the user)
    const handleConfirmDelete = () => {
        // Implement delete logic here
        console.log('Deleting user:', userToDelete.ten);
        setShowDeleteModal(false);
    };

    return (
        <div className="usermanage">
            {/* Modal Integration */}
            <DeleteModal show={showDeleteModal} onHide={handleCloseModal} onConfirm={handleConfirmDelete} />

            {/* Rest of the UserManage component */}
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý người dùng</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Quản lý người dùng</h2>
            </div>
            <div className="filter">
                <h3>Bộ lọc</h3>
                <div className="row">
                    <div className="col-lg-3 form-group">
                        <label>Tên:</label>
                        <input
                            placeholder="Nhập tên cần tìm"
                            className="form-control"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-3 form-group">
                        <label>Vai trò:</label>
                        <select
                            className="form-control"
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <option value="">--Tất cả--</option>
                            <option value="Bác sĩ">Bác sĩ</option>
                            <option value="Bệnh nhân">Bệnh nhân</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="col-lg-3 form-group">
                        <label>Giới tính:</label>
                        <select
                            className="form-control"
                            value={genderFilter}
                            onChange={(e) => setGenderFilter(e.target.value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <option value="">--Tất cả--</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                </div>
                <button
                    className="btn bg-primary-light"
                    style={{ margin: '15px 15px 0 15px' }}
                    onClick={() => {
                        setNameFilter('');
                        setRoleFilter('');
                        setGenderFilter('');
                    }}
                >
                    Cài lại
                </button>
            </div>
            <div className="btn__add">
                <button className="btn btn-sm bg-primary-light" onClick={handleAdd}>
                    <MdAddCircle /> Thêm
                </button>
            </div>
            <div className="table">
                <Table columns={columns} data={filteredData} />
            </div>
        </div>
    );
}

export default UserManage;
