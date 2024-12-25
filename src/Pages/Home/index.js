import './Home.scss';
import React from 'react';
import { FaHospitalAlt, FaMobileAlt, FaHandHoldingMedical } from 'react-icons/fa';
import { FaBedPulse, FaUserDoctor } from 'react-icons/fa6';
import { GiTestTubes } from 'react-icons/gi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import header_icon from '../../assets/img/Logo/header-icon.svg';
import img_xk from '../../assets/img/specialty/xương khớp.png';
import img_2 from '../../assets/img/specialty/than-kinh.png';
import img_3 from '../../assets/img/specialty/tieu-hoa.png';
import img_4 from '../../assets/img/specialty/tim-mach.png';
import img_5 from '../../assets/img/specialty/tai-mui-hong.png';
import img_6 from '../../assets/img/specialty/cot-song.png';
import img_7 from '../../assets/img/specialty/da-lieu.png';
import img_8 from '../../assets/img/specialty/cham-cuu.png';
import bs1 from '../../assets/img/doctor/bs1.jpg';
import bs2 from '../../assets/img/doctor/bs2.png';
import bs3 from '../../assets/img/doctor/bs3.jpg';
import bs4 from '../../assets/img/doctor/bs4.png';
import bs5 from '../../assets/img/doctor/bs5.jpg';
import md1 from '../../assets/img/medical/img1.webp';
import md2 from '../../assets/img/medical/img2.jpg';
import md4 from '../../assets/img/medical/img4.webp';
import md5 from '../../assets/img/medical/img5.webp';
import md6 from '../../assets/img/medical/img6.webp';
import channel1 from '../../assets/img/media/vtv1.png';
import channel2 from '../../assets/img/media/ictnews.png';
import channel3 from '../../assets/img/media/165432-vtcnewslogosvg.png';
import channel4 from '../../assets/img/media/cuc-cong-nghe-thong-tin-bo-y-te-2.png';
import channel5 from '../../assets/img/media/vnexpress.png';
import channel6 from '../../assets/img/media/infonet.png';

function Home() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings_doctor = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings_medical = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const specialties = [
        { title: 'Cơ xương khớp', img: img_xk },
        { title: 'Thần kinh', img: img_2 },
        { title: 'Tiêu hóa', img: img_3 },
        { title: 'Tim mạch', img: img_4 },
        { title: 'Tai mũi họng', img: img_5 },
        { title: 'Cột sống', img: img_6 },
        { title: 'Da liễu', img: img_7 },
        { title: 'Châm cứu', img: img_8 },
    ];

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
    ];

    const medicalFacilities = [
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

    return (
        <div className="home">
            <div className="home__banner">
                <div className="home__overlay ">
                    <div className="home__banner_service">
                        <div className="home__banner_service_content">
                            <div className="home__banner_service_icon">
                                <FaHospitalAlt />
                            </div>
                            <div className="home__banner_service_desrip">
                                <p>Khám chuyên khoa</p>
                            </div>
                        </div>
                        <div className="home__banner_service_content">
                            <div className="home__banner_service_icon">
                                <FaMobileAlt />
                            </div>
                            <div className="home__banner_service_desrip">
                                <p>Khám từ xa</p>
                            </div>
                        </div>
                        <div className="home__banner_service_content">
                            <div className="home__banner_service_icon">
                                <FaBedPulse />
                            </div>
                            <div className="home__banner_service_desrip">
                                <p>Khám tổng quát</p>
                            </div>
                        </div>
                        <div className="home__banner_service_content">
                            <div className="home__banner_service_icon">
                                <GiTestTubes />
                            </div>
                            <div className="home__banner_service_desrip">
                                <p>Xét nghiệm y học</p>
                            </div>
                        </div>
                        <div className="home__banner_service_content">
                            <div className="home__banner_service_icon">
                                <FaUserDoctor />
                            </div>
                            <div className="home__banner_service_desrip">
                                <p>Sức khỏe tinh thần</p>
                            </div>
                        </div>
                        <div className="home__banner_service_content">
                            <div className="home__banner_service_icon">
                                <FaHandHoldingMedical />
                            </div>
                            <div className="home__banner_service_desrip">
                                <p>Khám nha khoa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="home__specialty">
                    <div className="home__specialty_title">
                        <div className="home__specialty_title_header">
                            <h2>Chuyên khoa </h2>
                            <img src={header_icon} alt="" />
                        </div>
                        <Link to="/chuyen-khoa">
                            <h3>Xem thêm</h3>
                        </Link>
                    </div>
                    <div className="home__specialty_content">
                        <Slider {...settings}>
                            {specialties.map((specialty, index) => (
                                <div key={index} className="home__specialty_content_item">
                                    <Link to="/chi-tiet-chuyen-khoa">
                                        <div className="home__specialty_content_item_img">
                                            <img src={specialty.img} alt={specialty.title} />
                                        </div>
                                        <div className="home__specialty_content_item_title">
                                            <h3>{specialty.title}</h3>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="home__doctor">
                <div className="wrap">
                    <div className="home__doctor_title">
                        <div className="home__doctor_title_header">
                            <h2>Bác sĩ nổi bật </h2>
                            <img src={header_icon} alt="" />
                        </div>
                        <Link to="/bac-si">
                            <h3>Xem thêm</h3>
                        </Link>
                    </div>
                    <div className="home__doctor_content">
                        <Slider {...settings_doctor}>
                            {doctors.map((doctor, index) => (
                                <div key={index} className="home__doctor_content_item">
                                    <Link to="/chi-tiet-bac-si">
                                        <div className="home__doctor_content_item_img">
                                            <img src={doctor.img} alt={doctor.name} />
                                        </div>
                                        <div className="home__doctor_content_item_title">
                                            <h3>{doctor.name}</h3>
                                            <p>{doctor.specialty}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="home__medical">
                    <div className="home__medical_title">
                        <div className="home__medical_title_header">
                            <h2>Cơ sở y tế nổi bật</h2>
                            <img src={header_icon} alt="" />
                        </div>
                        <Link to="/co-so-y-te">
                            <h3>Xem thêm</h3>
                        </Link>
                    </div>
                    <div className="home__medical_content">
                        <Slider {...settings_medical}>
                            {medicalFacilities.map((facility, index) => (
                                <div key={index} className="home__medical_content_item">
                                    <Link to="/chi-tiet-co-so-y-te">
                                        <div className="home__medical_content_item_img">
                                            <img src={facility.img} alt={facility.title} />
                                        </div>
                                        <div className="home__medical_content_item_title">
                                            <h3>{facility.title}</h3>
                                        </div>
                                        <div className="home__medical_content_item_adress">
                                            <IoLocationOutline />
                                            <p>{facility.address}</p>
                                        </div>
                                        <div className="home__medical_content_item_rating"></div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="home__media">
                <div className="wrap">
                    <div className="home__media_title">
                        <h2>Truyền thông</h2>
                    </div>
                    <div className="home__media_content row">
                        <div className="col-lg-6">
                            <div class=" ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/PAHpKbRoVps?si=roKD6wjfS0p5Q2P4"
                                    title="YouTube video"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel1} alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel2} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel3} alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel4} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel5} alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel6} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel2} alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="" className="home__media_content_channel">
                                        <img src={channel4} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
