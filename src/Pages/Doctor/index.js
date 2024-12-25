import './Doctor.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import Pagination from '../../components/Pagination';
import bs1 from '../../assets/img/doctor/bs1.jpg';
import bs2 from '../../assets/img/doctor/bs2.png';
import bs3 from '../../assets/img/doctor/bs3.jpg';
import bs4 from '../../assets/img/doctor/bs4.png';
import bs5 from '../../assets/img/doctor/bs5.jpg';

function Doctor() {
    const doctors = [
        {
            name: 'BSCKI Võ Thị Ngọc Thu',
            specialty: 'Thần kinh, nội khoa',
            img: bs1,
        },
        {
            name: 'Thạc sĩ, Bác sĩ Nguyễn Văn Nghị',
            specialty: 'Tiểu đường - Nội tiết - Ung bướu - Tuyến giáp',
            img: bs2,
        },
        {
            name: 'BSCKII Dương Minh Trí',
            specialty: 'Cơ Xương Khớp',
            img: bs3,
        },
        {
            name: 'BSCKII Kim Văn Trung',
            specialty: 'Cơ Xương Khớp - Nội khoa',
            img: bs4,
        },
        {
            name: 'Tiến sĩ, Bác sĩ Nguyễn Diệu Linh',
            specialty: 'Ung bướu',
            img: bs5,
        },
        {
            name: 'BSCKI Võ Thị Ngọc Thu',
            specialty: 'Thần kinh, nội khoa',
            img: bs1,
        },
        {
            name: 'Thạc sĩ, Bác sĩ Nguyễn Văn Nghị',
            specialty: 'Tiểu đường - Nội tiết - Ung bướu - Tuyến giáp',
            img: bs2,
        },
        {
            name: 'BSCKII Dương Minh Trí',
            specialty: 'Cơ Xương Khớp',
            img: bs3,
        },
        {
            name: 'BSCKII Kim Văn Trung',
            specialty: 'Cơ Xương Khớp - Nội khoa',
            img: bs4,
        },
        {
            name: 'Tiến sĩ, Bác sĩ Nguyễn Diệu Linh',
            specialty: 'Ung bướu',
            img: bs5,
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Số bác sĩ hiển thị mỗi trang

    // Lọc danh sách bác sĩ dựa trên từ khóa tìm kiếm
    const filteredDoctors = doctors.filter(
        (doctor) =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Tính tổng số trang
    const pageCount = Math.ceil(filteredDoctors.length / itemsPerPage);

    // Tính các mục để hiển thị trên trang hiện tại
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredDoctors.slice(offset, offset + itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo(0, 120); // Cuộn lên đầu trang
    };

    // Đặt lại trang hiện tại khi từ khóa tìm kiếm thay đổi
    useEffect(() => {
        setCurrentPage(0);
    }, [searchTerm]);

    return (
        <div className="wrap">
            <div className="doctor">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Bác sĩ nổi bật</p>
                    </div>
                </div>
                <div className="doctor__title">
                    <h2>Danh sách các bác sĩ</h2>
                </div>

                {/* Component tìm kiếm */}
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                {/* Hiển thị danh sách bác sĩ */}
                <div className="doctor__list">
                    {currentItems.length > 0 ? (
                        currentItems.map((doctor, index) => (
                            <Link to="/chi-tiet-bac-si" className="doctor__item" key={index}>
                                <div className="doctor__item_img">
                                    <img src={doctor.img} alt={doctor.name} />
                                </div>
                                <div className="doctor__item_content">
                                    <div className="doctor__item_content_item">
                                        <h3>{doctor.name}</h3>
                                        <p>{doctor.specialty}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no__result">
                            <p>Không có kết quả</p>
                        </div>
                    )}
                </div>

                {/* Phân trang */}
                {filteredDoctors.length > itemsPerPage && (
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage} />
                )}
            </div>
        </div>
    );
}

export default Doctor;
