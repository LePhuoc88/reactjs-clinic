import React, { useState } from 'react';
import './MedicationManage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdModeEdit, MdAddCircle } from 'react-icons/md';
import Table from '../../../../components/Table/table';
import DeleteModal from '../../../../components/Modals/DeleteModal';

function MedicationManage() {
    const [filterName, setFilterName] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false); // State for modal visibility
    const [selectedMedication, setSelectedMedication] = useState(null); // State for selected medication

    const columns = [
        { Header: 'STT', accessor: 'stt' },
        { Header: 'Tên thuốc', accessor: 'ten' },
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
        { stt: '1', ten: 'Paracetamol' },
        { stt: '2', ten: 'Ibuprofen' },
        { stt: '3', ten: 'Amoxicillin' },
        { stt: '4', ten: 'Metformin' },
        { stt: '5', ten: 'Aspirin' },
    ];

    // Filter the data based on the filterName input
    const filteredData = data.filter((item) => item.ten.toLowerCase().includes(filterName.toLowerCase()));

    // Function to handle delete button click
    const handleDeleteClick = (medication) => {
        setSelectedMedication(medication);
        setShowDeleteModal(true); // Show the modal
    };

    // Function to handle modal confirm (delete)
    const handleDeleteConfirm = () => {
        console.log('Deleted:', selectedMedication);
        setShowDeleteModal(false);
        // Implement deletion logic here (e.g., updating state or making an API call)
    };

    // Function to handle modal close
    const handleDeleteClose = () => {
        setShowDeleteModal(false);
        setSelectedMedication(null); // Reset selected medication
    };

    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/quan-ly-thuoc/them-thuoc');
    };

    return (
        <div className="medication__manage">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý thuốc</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Quản lý thuốc</h2>
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
                            placeholder="Nhập tên thuốc"
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
            <DeleteModal show={showDeleteModal} onHide={handleDeleteClose} onConfirm={handleDeleteConfirm} />
        </div>
    );
}

export default MedicationManage;
