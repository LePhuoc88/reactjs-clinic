import './Facility.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import { MdOutlineLocationOn } from 'react-icons/md';
import Pagination from '../../components/Pagination';
import md1 from '../../assets/img/medical/img1.webp';
import md2 from '../../assets/img/medical/img2.jpg';
import md4 from '../../assets/img/medical/img4.webp';
import md5 from '../../assets/img/medical/img5.webp';
import md6 from '../../assets/img/medical/img6.webp';

function Facility() {
    const facility = [
        {
            img: md1,
            title: 'Bệnh viện quận Bình Thạnh',
            address: 'Quận Bình Thạnh, Thành phố Hồ Chí Minh',
        },
        {
            img: md2,
            title: 'Bệnh viện Chợ Rẫy',
            address: 'Quận 5, Thành phố Hồ Chí Minh',
        },
        {
            img: md4,
            title: 'Bệnh Viện Mắt',
            address: 'Quận 3, TP. Hồ Chí Minh',
        },
        {
            img: md5,
            title: 'Bệnh viện Nguyễn Trãi',
            address: 'Quận 5, Thành phố Hồ Chí Minh',
        },
        {
            img: md6,
            title: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
            address: 'Quận 5, TP.HCM',
        },
        {
            img: md1,
            title: 'Bệnh viện quận Bình Thạnh',
            address: 'Quận Bình Thạnh, Thành phố Hồ Chí Minh',
        },
        {
            img: md2,
            title: 'Bệnh viện Chợ Rẫy',
            address: 'Quận 5, Thành phố Hồ Chí Minh',
        },
        {
            img: md4,
            title: 'Bệnh Viện Mắt',
            address: 'Quận 3, TP. Hồ Chí Minh',
        },
        {
            img: md5,
            title: 'Bệnh viện Nguyễn Trãi',
            address: 'Quận 5, Thành phố Hồ Chí Minh',
        },
        {
            img: md6,
            title: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
            address: 'Quận 5, TP.HCM',
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Số cơ sở y tế hiển thị mỗi trang

    // Lọc danh sách cơ sở y tế dựa trên từ khóa tìm kiếm
    const filteredFacilities = facility.filter(
        (fac) =>
            fac.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fac.address.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Tính tổng số trang
    const pageCount = Math.ceil(filteredFacilities.length / itemsPerPage);

    // Tính các mục để hiển thị trên trang hiện tại
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredFacilities.slice(offset, offset + itemsPerPage);

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
            <div className="facility">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Cơ sở y tế nổi bật</p>
                    </div>
                </div>
                <div className="facility__title">
                    <h2>Danh sách các cơ sở y tế</h2>
                </div>

                {/* Component tìm kiếm */}
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                {/* Hiển thị danh sách cơ sở y tế */}
                <div className="facility__list">
                    {currentItems.length > 0 ? (
                        currentItems.map((fac, index) => (
                            <Link to="/chi-tiet-co-so-y-te" className="facility__item" key={index}>
                                <div className="facility__item_img">
                                    <img src={fac.img} alt={fac.title} />
                                </div>
                                <div className="facility__item_content">
                                    <div className="doctor__item_content_item">
                                        <h3>{fac.title}</h3>
                                        <p>
                                            <MdOutlineLocationOn />
                                            {fac.address}
                                        </p>
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
                {filteredFacilities.length > itemsPerPage && (
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage} />
                )}
            </div>
        </div>
    );
}

export default Facility;
