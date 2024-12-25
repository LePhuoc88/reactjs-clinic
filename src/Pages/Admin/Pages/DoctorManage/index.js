import { Link, useNavigate } from 'react-router-dom';
import './DoctorManage.scss';
import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdModeEdit, MdAddCircle } from 'react-icons/md';
import Table from '../../../../components/Table/table';
import bs1 from '../../../../assets/img/doctor/bs2.png';
import bs2 from '../../../../assets/img/doctor/bs3.jpg';
import DeleteModal from '../../../../components/Modals/DeleteModal';

function DoctorManage() {
    // Initial data array
    const initialData = [
        {
            stt: '1',
            hinhanh: bs1,
            ten: 'Nguyễn Minh Trí',
            chucvi: 'Thạc sĩ',
            Chuyenkhoa: 'Xương khớp',
            benhvien: 'Chợ rẫy',
            tinhthanh: 'TP HCM',
        },
        {
            stt: '2',
            hinhanh: bs2,
            ten: 'Nguyễn Minh Thái',
            chucvi: 'Thạc sĩ',
            Chuyenkhoa: 'Thần kinh',
            benhvien: 'Bệnh viện Bình Dân',
            tinhthanh: 'TP HCM',
        },
    ];

    const [data, setData] = useState(initialData);
    const [filterName, setFilterName] = useState('');
    const [filterSpecialty, setFilterSpecialty] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const navigate = useNavigate(); // Initialize useNavigate

    // Filter handler function
    const handleFilter = (name, specialty) => {
        const filteredData = initialData.filter((doctor) => {
            const nameMatch = doctor.ten.toLowerCase().includes(name.toLowerCase());
            const specialtyMatch = specialty ? doctor.Chuyenkhoa === specialty : true;
            return nameMatch && specialtyMatch;
        });
        setData(filteredData);
    };

    // Reset filter handler function
    const handleReset = () => {
        setFilterName('');
        setFilterSpecialty('');
        setData(initialData);
    };

    const handleDelete = (doctor) => {
        setSelectedDoctor(doctor); // Set doctor to be deleted
        setShowModal(true); // Show the modal
    };

    const confirmDelete = () => {
        // Remove the doctor from the data
        const updatedData = data.filter((doc) => doc.stt !== selectedDoctor.stt);
        setData(updatedData);
        setShowModal(false); // Hide the modal after confirming
    };

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
            Header: 'Chức vị',
            accessor: 'chucvi',
        },
        {
            Header: 'Chuyên khoa',
            accessor: 'Chuyenkhoa',
        },
        {
            Header: 'Bệnh viện',
            accessor: 'benhvien',
        },
        {
            Header: 'Tỉnh thành',
            accessor: 'tinhthanh',
        },
        {
            accessor: 'hanhdong',
            Cell: ({ row }) => (
                <div className="action">
                    <button className="btn btn-sm bg-success-light mg__right" onClick={handleEditDoctor}>
                        Sửa <MdModeEdit />
                    </button>
                    <button
                        className="btn btn-sm bg-danger-light"
                        onClick={() => handleDelete(row.original)} // Pass the doctor to be deleted
                    >
                        Xóa <FaRegTrashAlt />
                    </button>
                </div>
            ),
        },
    ];

    // Function to handle "Thêm" button click
    const handleAddDoctor = () => {
        navigate('/quan-ly-bac-si/them-bac-si');
    };
    const handleEditDoctor = () => {
        navigate('/quan-ly-bac-si/sua-bac-si');
    };

    return (
        <div className="doctormanage">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý bác sĩ</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Quản lý bác sĩ</h2>
            </div>
            <div className="filter">
                <h3>Bộ lọc</h3>
                <div className="row">
                    <div className="col-lg-3 form-group">
                        <label>Tên:</label>
                        <input
                            className="form-control"
                            value={filterName}
                            onChange={(e) => {
                                setFilterName(e.target.value);
                                handleFilter(e.target.value, filterSpecialty);
                            }}
                            placeholder="Nhập tên cần tìm"
                        />
                    </div>
                    <div className="col-lg-3 form-group">
                        <label>Chuyên khoa:</label>
                        <select
                            className="form-control"
                            value={filterSpecialty}
                            onChange={(e) => {
                                setFilterSpecialty(e.target.value);
                                handleFilter(filterName, e.target.value);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <option value="">--Tất cả--</option>
                            <option value="Xương khớp">Xương khớp</option>
                            <option value="Thần kinh">Thần kinh</option>
                            <option value="Tiêu hóa">Tiêu hóa</option>
                            <option value="Tim mạch">Tim mạch</option>
                            <option value="Tai mũi họng">Tai mũi họng</option>
                            <option value="Cột sống">Cột sống</option>
                            <option value="Da liễu">Da liễu</option>
                        </select>
                    </div>
                </div>
                <button className="btn bg-primary-light" onClick={handleReset} style={{ margin: '15px 15px 0 15px' }}>
                    Cài lại
                </button>
            </div>
            <div className="btn__add">
                <button className="btn btn-sm bg-primary-light" onClick={handleAddDoctor}>
                    {' '}
                    <MdAddCircle /> Thêm
                </button>
            </div>
            <div className="table">
                <Table columns={columns} data={data} />
            </div>

            {/* Confirmation Modal */}
            <DeleteModal show={showModal} onHide={() => setShowModal(false)} onConfirm={confirmDelete} />
        </div>
    );
}

export default DoctorManage;
