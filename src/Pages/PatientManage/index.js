import './PatientManage.scss';
import Table from '../../components/Table/table';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PatientManage() {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/quan-ly-benh-nhan/tao-don-thuoc');
    };

    // State to store the selected date for filtering
    const [selectedDate, setSelectedDate] = useState('');

    const columns = [
        {
            Header: 'STT',
            accessor: 'stt',
        },
        {
            Header: 'Thời gian khám',
            accessor: 'thoigiankham',
        },
        {
            Header: 'Tên bệnh nhân',
            accessor: 'tenbenhnhan',
        },
        {
            Header: 'Địa chỉ',
            accessor: 'diachi',
        },
        {
            Header: 'SĐT',
            accessor: 'sdt',
        },
        {
            Header: 'Giới tính',
            accessor: 'gioitinh',
        },
        {
            Header: 'Lý do khám',
            accessor: 'lydo',
        },
        {
            Header: 'Đơn thuốc',
            accessor: 'donthuoc',
        },
        {
            Header: '',
            accessor: 'hanhdong',
            Cell: ({ row }) => (
                <div>
                    {/* <button className="btn btn-primary btn-sm">Gửi đơn thuốc</button> */}
                    <button className="btn btn-success btn-sm" onClick={handleAdd}>
                        Tạo đơn thuốc
                    </button>
                    <button className="btn btn-danger btn-sm" style={{ marginLeft: '10px' }}>
                        Hủy
                    </button>
                </div>
            ),
        },
    ];

    const data = [
        {
            stt: '1',
            thoigiankham: '2024-10-05',
            tenbenhnhan: 'Lê Tấn Phước',
            diachi: 'Bình Dương',
            sdt: '03265684984',
            gioitinh: 'Nam',
            lydo: 'Đau bụng',
            donthuoc: <Link to="/quan-ly-benh-nhan/don-thuoc">Xem đơn thuốc</Link>,
            hanhdong: '',
        },
        {
            stt: '2',
            thoigiankham: '2024-10-09',
            tenbenhnhan: 'Lê Văn A',
            diachi: 'Bình Dương',
            sdt: '03265684984',
            gioitinh: 'Nam',
            lydo: 'Đau bụng',
            donthuoc: <Link to="/quan-ly-benh-nhan/don-thuoc">Xem đơn thuốc</Link>,
            hanhdong: '',
        },
        {
            stt: '3',
            thoigiankham: '2024-10-01',
            tenbenhnhan: 'Lê Tấn Bảo',
            diachi: 'Bình Dương',
            sdt: '03265684984',
            gioitinh: 'Nam',
            lydo: 'Đau đầu',
            donthuoc: <Link to="/quan-ly-benh-nhan/don-thuoc">Xem đơn thuốc</Link>,
            hanhdong: '',
        },
    ];

    // Function to filter the data based on the selected date
    const filteredData = selectedDate ? data.filter((patient) => patient.thoigiankham === selectedDate) : data;

    // Function to reset the selected date and show all data
    const handleReset = () => {
        setSelectedDate('');
    };

    return (
        <div className="patientmanage">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Quản lý bệnh nhân</p>
                </div>
            </div>
            <div className="doctor__title">
                <h2>Quản lý bệnh nhân</h2>
            </div>
            <div className="choose__day">
                <p>Chọn ngày khám:</p>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
            <button className="btn bg-primary-light" style={{ margin: '15px 15px 20px 0' }} onClick={handleReset}>
                Cài lại
            </button>
            <div className="table">
                {filteredData.length > 0 ? (
                    <Table columns={columns} data={filteredData} />
                ) : (
                    <p>Không có bệnh nhân nào vào ngày này</p>
                )}
            </div>
        </div>
    );
}

export default PatientManage;
