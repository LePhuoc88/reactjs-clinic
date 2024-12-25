import './Specialty.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { GoSearch } from 'react-icons/go';
import Search from '../../components/Search';
import Pagination from '../../components/Pagination';
// import ReactPaginate from 'react-paginate';
import img_xk from '../../assets/img/specialty/xương khớp.png';
import img_2 from '../../assets/img/specialty/than-kinh.png';
import img_3 from '../../assets/img/specialty/tieu-hoa.png';
import img_4 from '../../assets/img/specialty/tim-mach.png';
import img_5 from '../../assets/img/specialty/tai-mui-hong.png';
import img_6 from '../../assets/img/specialty/cot-song.png';
import img_7 from '../../assets/img/specialty/da-lieu.png';
import img_8 from '../../assets/img/specialty/cham-cuu.png';

function Specialty() {
    const specialties = [
        { title: 'Cơ xương khớp', img: img_xk },
        { title: 'Thần kinh', img: img_2 },
        { title: 'Tiêu hóa', img: img_3 },
        { title: 'Tim mạch', img: img_4 },
        { title: 'Tai mũi họng', img: img_5 },
        { title: 'Cột sống', img: img_6 },
        { title: 'Da liễu', img: img_7 },
        { title: 'Châm cứu', img: img_8 },
        { title: 'Thần kinh', img: img_2 },
        { title: 'Tiêu hóa', img: img_3 },
        { title: 'Tim mạch', img: img_4 },
        { title: 'Tai mũi họng', img: img_5 },
        { title: 'Cột sống', img: img_6 },
        { title: 'Da liễu', img: img_7 },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;

    // Lọc chuyên khoa dựa trên từ khóa tìm kiếm
    const filteredSpecialties = specialties.filter((specialty) =>
        specialty.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Tính tổng số trang cần thiết
    const pageCount = Math.ceil(filteredSpecialties.length / itemsPerPage);

    // Tính các mục để hiển thị trên trang hiện tại
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredSpecialties.slice(offset, offset + itemsPerPage);

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
            <div className="specialty">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Khám chuyên khoa</p>
                    </div>
                </div>
                <div className="specialty__title">
                    <h2>Danh sách các chuyên khoa</h2>
                </div>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className="home__specialty_content">
                    <div className="row">
                        {currentItems.length > 0 ? (
                            currentItems.map((specialty, index) => (
                                <div className="col-lg-3" key={index}>
                                    <div className="home__specialty_content_item">
                                        <Link to="/chi-tiet-chuyen-khoa">
                                            <div className="home__specialty_content_item_img">
                                                <img src={specialty.img} alt={specialty.title} />
                                            </div>
                                            <div className="home__specialty_content_item_title">
                                                <h3>{specialty.title}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no__result">
                                <p>Không có kết quả</p>
                            </div>
                        )}
                    </div>
                    {filteredSpecialties.length > itemsPerPage && (
                        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Specialty;
