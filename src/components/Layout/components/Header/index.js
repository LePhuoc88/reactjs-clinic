import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../../../assets/img/Logo/LOGO_PhuocAn.png';
import avatar from '../../../../assets/img/Logo/avatar.jpg';
import { FaQuestionCircle } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import { MdVpnKey } from 'react-icons/md';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null); // Sử dụng ref để xác định phần tử dropdown

    const handleMenuClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (event) => {
        // Kiểm tra nếu nhấp chuột không thuộc dropdownRef hoặc header__icon_menu
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !event.target.closest('.header__icon_menu')
        ) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        // Lắng nghe sự kiện click của toàn document
        document.addEventListener('mousedown', handleClickOutside);

        // Hủy sự kiện khi component bị unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="wrap">
                <div className="header__content row">
                    <div className="col-lg-2">
                        <Link to="/" className="Logo">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-8">
                        <div className="header__menu">
                            <Link to="/chuyen-khoa">
                                <div className="header__menu_title">Chuyên khoa</div>
                                <div className="header__menu_desription">Tìm bác sĩ theo chuyên khoa</div>
                            </Link>
                            <Link to="/co-so-y-te">
                                <div className="header__menu_title">Cơ sở y tế</div>
                                <div className="header__menu_desription">Chọn bệnh viện phòng khám</div>
                            </Link>
                            <Link to="/bac-si">
                                <div className="header__menu_title">Bác sĩ</div>
                                <div className="header__menu_desription">Chọn bác sĩ giỏi</div>
                            </Link>
                            <Link to="">
                                <div className="header__menu_title">Gói khám</div>
                                <div className="header__menu_desription">Khám sức khỏe tổng quát</div>
                            </Link>
                        </div>
                    </div>
                    <div className="header__right col-lg-2">
                        <Link className="header__support">
                            <FaQuestionCircle />
                            Hỗ trợ
                        </Link>
                        <Link className="header__avatar" to="/thong-tin-nguoi-dung">
                            <img src={avatar} alt="" />
                        </Link>
                        <div className="header__icon_menu" onClick={handleMenuClick}>
                            <IoMenu />
                        </div>
                        <div ref={dropdownRef} className={`header__dropdown ${showDropdown ? 'show' : ''}`}>
                            <Link to="/login" className="dropdown__item">
                                <MdVpnKey />
                                Đăng nhập
                            </Link>
                            <Link to="/register" className="dropdown__item">
                                <FaUserPlus />
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
