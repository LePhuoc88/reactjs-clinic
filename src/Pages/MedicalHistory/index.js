import './MedicalHistory.scss';
import { Link } from 'react-router-dom';
import Table from '../../components/Table/table';
import FilterDay from '../../components/FilterDay';
import React, { useState } from 'react';

// Khai báo data trước khi sử dụng useState
const data = [
    {
        stt: '1',
        ngaykham: '2024-10-05',
        lydo: 'Đau bụng',
        bacsikham: 'Nguyễn Minh Trí',
        // donthuoc: 'Thuoc A, Thuoc B',
        loidan: 'Uống sau khi ăn no',
        donthuoc: <Link to="/lich-su-kham-benh/don-thuoc">Xem đơn thuốc</Link>,
    },
    {
        stt: '2',
        ngaykham: '2024-10-09',
        lydo: 'Đau bụng',
        bacsikham: 'Nguyễn Minh Trí',
        loidan: 'Uống sau khi ăn no',
        donthuoc: <Link to="/lich-su-kham-benh/don-thuoc">Xem đơn thuốc</Link>,
    },
    {
        stt: '3',
        ngaykham: '2024-06-05',
        lydo: 'Đau đầu',
        bacsikham: 'Nguyễn Hải',
        loidan: 'Uống sau khi ăn no',
        donthuoc: <Link to="/lich-su-kham-benh/don-thuoc">Xem đơn thuốc</Link>,
    },
];

function MedicalHistory() {
    // Sử dụng data ở đây
    const [filteredData, setFilteredData] = useState(data);

    const columns = [
        { Header: 'STT', accessor: 'stt' },
        { Header: 'Ngày khám', accessor: 'ngaykham' },
        { Header: 'Lý do', accessor: 'lydo' },
        { Header: 'Bác sĩ khám bệnh', accessor: 'bacsikham' },
        { Header: 'Lời dặn của bác sĩ', accessor: 'loidan' },
        { Header: 'Đơn thuốc', accessor: 'donthuoc' },
    ];

    const filterByDate = (fromDate, toDate) => {
        const filtered = data.filter((item) => {
            const examDate = new Date(item.ngaykham);
            const from = fromDate ? new Date(fromDate) : null;
            const to = toDate ? new Date(toDate) : null;

            // So sánh các ngày nếu chúng hợp lệ
            return (!from || examDate >= from) && (!to || examDate <= to);
        });
        setFilteredData(filtered);
    };

    const resetFilter = () => {
        setFilteredData(data); // Đặt lại dữ liệu gốc
    };

    return (
        <div className="medical__history">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Lịch sử khám bệnh</p>
                </div>
            </div>
            <div className="doctor__title">
                <h2>Lịch sử khám bệnh</h2>
            </div>
            <FilterDay onFilter={filterByDate} onReset={resetFilter} />
            <div className="table">
                <Table columns={columns} data={filteredData} />
            </div>
        </div>
    );
}

export default MedicalHistory;
