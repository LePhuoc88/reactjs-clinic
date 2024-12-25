import React, { useState, useEffect } from 'react';
import './FacilityManage.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdModeEdit, MdAddCircle } from 'react-icons/md';
import Table from '../../../../components/Table/table';
import { Link, useNavigate } from 'react-router-dom';
import DeleteModal from '../../../../components/Modals/DeleteModal';
import md1 from '../../../../assets/img/medical/img1.webp';
import md2 from '../../../../assets/img/medical/img2.jpg';
import md4 from '../../../../assets/img/medical/img4.webp';
import md5 from '../../../../assets/img/medical/img5.webp';
import md6 from '../../../../assets/img/medical/img6.webp';

function FacilityManage() {
    const initialData = [
        { stt: '1', hinhanh: md1, ten: 'Bệnh viện quận Bình Thạnh', diachi: 'Quận Bình Thạnh, Thành phố Hồ Chí Minh' },
        { stt: '2', hinhanh: md2, ten: 'Bệnh viện Chợ Rẫy', diachi: 'Quận 5, Thành phố Hồ Chí Minh' },
        { stt: '3', hinhanh: md4, ten: 'Bệnh Viện Mắt', diachi: 'Quận 3, TP. Hồ Chí Minh' },
        { stt: '4', hinhanh: md5, ten: 'Bệnh viện Nguyễn Trãi', diachi: 'Quận 5, Thành phố Hồ Chí Minh' },
        { stt: '5', hinhanh: md6, ten: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM', diachi: 'Quận 5, TP.HCM' },
    ];

    const [data, setData] = useState(initialData);
    const [filterName, setFilterName] = useState('');
    const [filterAddress, setFilterAddress] = useState('');
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [facilityToDelete, setFacilityToDelete] = useState(null); // Facility to be deleted

    useEffect(() => {
        const filteredData = initialData.filter((facility) => {
            const nameMatch = facility.ten.toLowerCase().includes(filterName.toLowerCase());
            const addressMatch = facility.diachi.toLowerCase().includes(filterAddress.toLowerCase());
            return nameMatch && addressMatch;
        });
        setData(filteredData);
    }, [filterName, filterAddress]);

    const handleReset = () => {
        setFilterName('');
        setFilterAddress('');
        setData(initialData);
    };

    const handleDeleteClick = (facility) => {
        setFacilityToDelete(facility);
        setShowModal(true); // Show modal when "Xóa" is clicked
    };

    const handleConfirmDelete = () => {
        setData(data.filter((item) => item.stt !== facilityToDelete.stt)); // Remove the facility from data
        setShowModal(false); // Hide modal after deletion
    };

    const columns = [
        { Header: 'STT', accessor: 'stt' },
        {
            Header: 'Hình ảnh',
            accessor: 'hinhanh',
            Cell: ({ row }) => <img src={row.original.hinhanh} alt="Facility" className="doctor__image" />,
        },
        { Header: 'Tên', accessor: 'ten' },
        { Header: 'Địa chỉ', accessor: 'diachi' },
        {
            accessor: 'hanhdong',
            Cell: ({ row }) => (
                <div className="action">
                    <button className="btn btn-sm bg-success-light mg__right">
                        Sửa <MdModeEdit />
                    </button>
                    <button
                        className="btn btn-sm bg-danger-light"
                        onClick={() => handleDeleteClick(row.original)} // Open delete modal
                    >
                        Xóa <FaRegTrashAlt />
                    </button>
                </div>
            ),
        },
    ];

    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/quan-ly-benh-vien/them-benh-vien');
    };

    return (
        <div className="facilitymanage">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý bệnh viện</p>
                </div>
            </div>
            <div className="header__title">
                <h2>Quản lý bệnh viện</h2>
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
                            placeholder="Nhập tên cần tìm"
                        />
                    </div>
                    <div className="col-lg-3 form-group">
                        <label>Địa chỉ:</label>
                        <input
                            className="form-control"
                            value={filterAddress}
                            onChange={(e) => setFilterAddress(e.target.value)}
                            placeholder="Nhập địa chỉ"
                        />
                    </div>
                </div>
                <button className="btn bg-primary-light" onClick={handleReset} style={{ margin: '15px 15px 0 15px' }}>
                    Cài lại
                </button>
            </div>
            <div className="btn__add">
                <button className="btn btn-sm bg-primary-light" onClick={handleAdd}>
                    <MdAddCircle /> Thêm
                </button>
            </div>
            <div className="table">
                <Table columns={columns} data={data} />
            </div>

            {/* Delete confirmation modal */}
            {facilityToDelete && (
                <DeleteModal show={showModal} onHide={() => setShowModal(false)} onConfirm={handleConfirmDelete} />
            )}
        </div>
    );
}

export default FacilityManage;
