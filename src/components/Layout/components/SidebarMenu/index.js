import './SidebarMenu.scss';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import { FaEdit, FaUser, FaStethoscope, FaClipboardList } from 'react-icons/fa';
import avata from '../../../../assets/img/Logo/avatar.jpg';
import img_doctor from '../../../../assets/img/doctor/bs3.jpg';

function SidebarMenu() {
    const location = useLocation();

    // Adjust to check if the current path starts with '/quan-ly-benh-nhan' or '/quan-ly-ca-kham'
    const isDoctorPath =
        location.pathname.startsWith('/quan-ly-benh-nhan') || location.pathname.startsWith('/quan-ly-ca-kham');

    return (
        <div className="sidebar__menu">
            <Sidebar className="sidebar_user">
                <div className="sidebar__menu_title">
                    <h4>Thiết lập</h4>
                </div>
                <p>Hồ sơ</p>
                <Menu>
                    {/* Render regular user options if not on doctor-specific routes */}
                    {!isDoctorPath && (
                        <>
                            <div className="Sidebar__info">
                                <div className="Sidebar__info_img">
                                    <img src={avata} alt="" />
                                </div>
                                <div className="Sidebar__info_wrap">
                                    <h4>Lê Phước</h4>
                                    <span>Bệnh nhân</span>
                                </div>
                            </div>
                            <MenuItem
                                component={<Link to="/thong-tin-nguoi-dung" />}
                                className={location.pathname === '/thong-tin-nguoi-dung' ? 'active-menu' : ''}
                            >
                                <FaUser /> Thông tin người dùng
                            </MenuItem>
                            {/* Use startsWith to check if the current path includes '/lich-su-kham-benh' */}
                            <MenuItem
                                component={<Link to="/lich-su-kham-benh" />}
                                className={location.pathname.startsWith('/lich-su-kham-benh') ? 'active-menu' : ''}
                            >
                                <FaEdit /> Lịch sử khám bệnh
                            </MenuItem>
                        </>
                    )}

                    {/* Render doctor-specific options only if on doctor-specific routes */}
                    {isDoctorPath && (
                        <>
                            <div className="Sidebar__info">
                                <div className="Sidebar__info_img">
                                    <img src={img_doctor} alt="" />
                                </div>
                                <div className="Sidebar__info_wrap">
                                    <h4>Nguyễn Minh Trí</h4>
                                    <span>Bác sĩ</span>
                                </div>
                            </div>
                            <MenuItem
                                component={<Link to="/quan-ly-benh-nhan" />}
                                className={location.pathname.startsWith('/quan-ly-benh-nhan') ? 'active-menu' : ''}
                            >
                                <FaStethoscope /> Quản lý bệnh nhân
                            </MenuItem>
                            <MenuItem
                                component={<Link to="/quan-ly-ca-kham" />}
                                className={location.pathname.startsWith('/quan-ly-ca-kham') ? 'active-menu' : ''}
                            >
                                <FaClipboardList /> Quản lý ca khám bệnh
                            </MenuItem>
                        </>
                    )}
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SidebarMenu;
