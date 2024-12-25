import React from 'react';
import './HeaderAdmin.scss';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/img/Logo/LOGO_PhuocAn.png';
import avatar from '../../../../../assets/img/Logo/avatar.jpg';

function HeaderAdmin() {
    return (
        <>
            <div className="header__admin">
                <div className="header__admin_wrap">
                    <Link to="/Dashboard" className="Logo">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="header__admin_content">
                        <li className="nav-item dropdown d-none d-md-block">
                            <a href="#" className="dropdown-toggle nav-link">
                                <img src="assets/img/icons/note-icon-02.svg" alt />
                                <span className="pulse" />
                            </a>
                        </li>
                        <li className="nav-item dropdown d-none d-md-block">
                            <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link">
                                <img src="assets/img/icons/note-icon-01.svg" alt />
                                <span className="pulse" />{' '}
                            </a>
                        </li>

                        <div className="header__admin_content_title">
                            <h4>Lê Tấn Phước</h4>
                            <p>Admin</p>
                        </div>
                        <img src={avatar} alt="" className="header__admin_content_title_img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderAdmin;
