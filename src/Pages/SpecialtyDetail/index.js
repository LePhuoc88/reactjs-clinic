import React, { useState, button, useEffect } from 'react';
import './SpecialtyDetail.scss';
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';

import { FaAngleDown } from 'react-icons/fa6';
import bs1 from '../../assets/img/doctor/bs1.jpg';
import bs2 from '../../assets/img/doctor/bs2.png';
import bs3 from '../../assets/img/doctor/bs3.jpg';
import bs4 from '../../assets/img/doctor/bs4.png';
import bs5 from '../../assets/img/doctor/bs5.jpg';
import DayDropdown from '../../components/DayDropdown';
import Examination_address from '../../components/Examination_address';

function SpecialtyDetail() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    // const [showDetails, setShowDetails] = useState(false);

    // const toggleDetails = () => {
    //     setShowDetails(!showDetails);
    // };

    return (
        <div className="specialtydetail">
            <div className="banner"></div>
            <div className="wrap">
                <div className="specialtydetail_content">
                    <div className={`specialtydetail_content_text ${isExpanded ? 'expanded' : ''}`}>
                        <h5>Cơ xương khớp</h5>
                        <p className="specialtydetail_content_title">Bác sĩ Cơ Xương Khớp giỏi</p>
                        <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                        <ul>
                            <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                            <li>
                                Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà
                                Nội
                            </li>
                            <li>
                                Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện
                                Bạch Mai, Bệnh viện Hữu nghị Việt Đức, Bệnh Viện E.
                            </li>
                            <li>
                                Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp
                                khớp học,...
                            </li>
                            <li>
                                Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao
                                cấp,...
                            </li>
                        </ul>
                        <p className="specialtydetail_content_title">Bệnh Cơ Xương Khớp</p>
                        <ul>
                            <li>Gout</li>
                            <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
                            <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
                            <li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li>
                            <li>Loãng xương, đau nhức xương</li>
                            <li>Viêm xương, gai xương</li>
                            <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li>
                            <li>Yếu cơ, Loạn dưỡng cơ</li>
                            <li>Các chấn thương về cơ, xương, khớp</li>
                            <li> ... </li>
                        </ul>
                    </div>
                    <p className="see_more" onClick={toggleContent}>
                        {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
                    </p>
                </div>
                {/* <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle" onClick={toggleDropdown}>
                        Toàn quốc
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu show">
                            <li>
                                <Link to="" className="dropdown-item">
                                    Toàn quốc
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item">
                                    TP Hồ Chí Minh
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item">
                                    Hà Nội
                                </Link>
                            </li>
                        </ul>
                    )}
                </div> */}
                <div className="doctor__item">
                    <div className="row">
                        <div className="doctor__item_left col-lg-6">
                            <Link to="/chi-tiet-bac-si" className="doctor__item_left_img">
                                <img src={bs2} alt="" />
                                <p to="">Xem thêm</p>
                            </Link>
                            <div className="doctor__item_left_content">
                                <Link to="/chi-tiet-bac-si">BSCKII Dương Minh Trí</Link>
                                <p>
                                    Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống Hiện là Trưởng khoa Phẫu
                                    thuật Cột sống, Bệnh viện Việt Đức Bác sĩ nhận khám từ 7 tuổi trở lên
                                </p>
                                <div className="doctor__item_left_content_address">
                                    <MdOutlineLocationOn />
                                    <p>Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div className="doctor__item_right col-lg-6">
                            <DayDropdown />
                            <div className="br_bottom"></div>
                            <Examination_address />
                        </div>
                    </div>
                </div>
                <div className="doctor__item">
                    <div className="row">
                        <div className="doctor__item_left col-lg-6">
                            <Link to="/chi-tiet-bac-si" className="doctor__item_left_img">
                                <img src={bs2} alt="" />
                                <p to="">Xem thêm</p>
                            </Link>
                            <div className="doctor__item_left_content">
                                <Link to="/chi-tiet-bac-si">BSCKII Dương Minh Trí</Link>
                                <p>
                                    Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống Hiện là Trưởng khoa Phẫu
                                    thuật Cột sống, Bệnh viện Việt Đức Bác sĩ nhận khám từ 7 tuổi trở lên
                                </p>
                                <div className="doctor__item_left_content_address">
                                    <MdOutlineLocationOn />
                                    <p>Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div className="doctor__item_right col-lg-6">
                            <DayDropdown />
                            <div className="br_bottom"></div>
                            <Examination_address />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialtyDetail;
