import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SpecialtyManage.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdModeEdit, MdAddCircle } from 'react-icons/md';
import Table from '../../../../components/Table/table';
import DeleteModal from '../../../../components/Modals/DeleteModal';
import img_xk from '../../../../assets/img/specialty/xương khớp.png';
import img_2 from '../../../../assets/img/specialty/than-kinh.png';
import img_3 from '../../../../assets/img/specialty/tieu-hoa.png';
import img_4 from '../../../../assets/img/specialty/tim-mach.png';
import img_5 from '../../../../assets/img/specialty/tai-mui-hong.png';
import img_6 from '../../../../assets/img/specialty/cot-song.png';
import img_7 from '../../../../assets/img/specialty/da-lieu.png';
import img_8 from '../../../../assets/img/specialty/cham-cuu.png';

function SpecialtyManage() {
    const [filterName, setFilterName] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    const data = [
        { stt: '1', ten: 'Cơ xương khớp', hinhanh: img_xk },
        { stt: '2', ten: 'Thần kinh', hinhanh: img_2 },
        { stt: '3', ten: 'Tiêu hóa', hinhanh: img_3 },
        { stt: '4', ten: 'Tim mạch', hinhanh: img_4 },
        { stt: '5', ten: 'Tai mũi họng', hinhanh: img_5 },
        { stt: '6', ten: 'Cột sống', hinhanh: img_6 },
        { stt: '7', ten: 'Da liễu', hinhanh: img_7 },
        { stt: '8', ten: 'Châm cứu', hinhanh: img_8 },
    ];

    // Filter the data based on the filterName
    const filteredData = data.filter((item) => item.ten.toLowerCase().includes(filterName.toLowerCase()));

    const handleDeleteClick = (specialty) => {
        setSelectedSpecialty(specialty);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        // Perform the deletion here
        console.log(`Deleting specialty: ${selectedSpecialty.ten}`);
        setShowDeleteModal(false);
        // You can filter out the deleted specialty from data here if it's being updated in state
    };

    const columns = [
        { Header: 'STT', accessor: 'stt' },
        {
            Header: 'Hình ảnh',
            accessor: 'hinhanh',
            Cell: ({ row }) => <img src={row.original.hinhanh} alt="chuyên khoa" className="doctor__image" />,
        },
        { Header: 'Tên chuyên khoa', accessor: 'ten' },
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

    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/quan-ly-chuyen-khoa/them-chuyen-khoa');
    };

    return (
        <div className="specialtymanage">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý chuyên khoa</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Quản lý chuyên khoa</h2>
            </div>
            <div className="filter">
                <h3>Bộ lọc</h3>
                <div className="row">
                    <div className="col-lg-3 form-group">
                        <label>Tên:</label>
                        <input
                            className="form-control"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                            placeholder="Nhập tên chuyên khoa"
                        />
                    </div>
                </div>
                <button
                    className="btn bg-primary-light"
                    style={{ margin: '15px 15px 0 15px' }}
                    onClick={() => setFilterName('')}
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

            {/* Delete Confirmation Modal */}
            <DeleteModal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    );
}

export default SpecialtyManage;
