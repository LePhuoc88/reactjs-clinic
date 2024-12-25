import React, { useState } from 'react';
import './FacilityDetail.scss';
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

function FacilityDetail() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="facilitydetail">
            <div className="banner"></div>
            <div className="wrap">
                <div className="facilitydetail_content">
                    <div className={`facilitydetail_content_text ${isExpanded ? 'expanded' : ''}`}>
                        <h5>Cơ sở y tế</h5>
                        <p className="facilitydetail_content_title">Các cơ sở y tế uy tín</p>
                        <p>Danh sách các cơ sở y tế hàng đầu tại Việt Nam:</p>
                        <ul>
                            <li>Các cơ sở y tế đạt chuẩn quốc gia và quốc tế</li>
                            <li>Các bệnh viện, phòng khám với đội ngũ y bác sĩ giàu kinh nghiệm</li>
                            <li>Các cơ sở được đánh giá cao về chất lượng khám chữa bệnh</li>
                        </ul>
                        <p className="facilitydetail_content_title">Bệnh Cơ Xương Khớp</p>
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
                <div className="specialtydetail__item">
                    <div className="row">
                        <div className="specialtydetail__item_left col-lg-6">
                            <Link to="/chi-tiet-bac-si" className="specialtydetail__item_left_img">
                                <img src={bs2} alt="" />
                                <p>Xem thêm</p>
                            </Link>
                            <div className="specialtydetail__item_left_content">
                                <Link to="/chi-tiet-bac-si">BSCKII Dương Minh Trí</Link>
                                <p>
                                    Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống Hiện là Trưởng khoa Phẫu
                                    thuật Cột sống, Bệnh viện Việt Đức Bác sĩ nhận khám từ 7 tuổi trở lên
                                </p>
                                <div className="specialtydetail__item_left_content_address">
                                    <MdOutlineLocationOn />
                                    <p>Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div className="specialtydetail__item_right col-lg-6">
                            <DayDropdown />
                            <div className="br_bottom"></div>
                            <Examination_address />
                        </div>
                    </div>
                </div>
                <div className="specialtydetail__item">
                    <div className="row">
                        <div className="specialtydetail__item_left col-lg-6">
                            <Link to="/chi-tiet-bac-si" className="specialtydetail__item_left_img">
                                <img src={bs2} alt="" />
                                <p>Xem thêm</p>
                            </Link>
                            <div className="specialtydetail__item_left_content">
                                <Link to="/chi-tiet-bac-si">BSCKII Dương Minh Trí</Link>
                                <p>
                                    Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống Hiện là Trưởng khoa Phẫu
                                    thuật Cột sống, Bệnh viện Việt Đức Bác sĩ nhận khám từ 7 tuổi trở lên
                                </p>
                                <div className="specialtydetail__item_left_content_address">
                                    <MdOutlineLocationOn />
                                    <p>Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div className="specialtydetail__item_right col-lg-6">
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

export default FacilityDetail;
