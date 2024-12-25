import './SidebarAdmin.scss';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import { FaEdit, FaUser, FaHospital, FaClipboardList, FaPills, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import avata from '../../../../../assets/img/Logo/avatar.jpg';

function SidebarAdmin() {
    const location = useLocation(); // Get current location

    // Helper function to check if the current path starts with a specific route
    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <div className="sidebar__admin">
            <Sidebar className="sidebar_user">
                <Menu>
                    <div className="Sidebar__info">
                        <div className="Sidebar__info_img">
                            <img src={avata} alt="" />
                        </div>
                        <div className="Sidebar__info_wrap">
                            <h4>Lê Tấn Phước</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <MenuItem
                        component={<Link to="/Dashboard" />}
                        className={isActive('/Dashboard') ? 'active-menu' : ''}
                    >
                        <FaUser /> Thống Kê
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/quan-ly-bac-si" />}
                        className={isActive('/quan-ly-bac-si') ? 'active-menu' : ''}
                    >
                        <FaEdit /> Quản lý bác sĩ
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/quan-ly-nguoi-dung" />}
                        className={isActive('/quan-ly-nguoi-dung') ? 'active-menu' : ''}
                    >
                        <FaUsers /> Quản lý người dùng
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/quan-ly-benh-vien" />}
                        className={isActive('/quan-ly-benh-vien') ? 'active-menu' : ''}
                    >
                        <FaHospital /> Quản lý bệnh viện
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/quan-ly-chuyen-khoa" />}
                        className={isActive('/quan-ly-chuyen-khoa') ? 'active-menu' : ''}
                    >
                        <FaClipboardList /> Quản lý chuyên khoa
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/quan-ly-thuoc" />}
                        className={isActive('/quan-ly-thuoc') ? 'active-menu' : ''}
                    >
                        <FaPills /> Quản lý thuốc
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/quan-ly-lich-kham-benh" />}
                        className={isActive('/quan-ly-lich-kham-benh') ? 'active-menu' : ''}
                    >
                        <FaCalendarAlt /> Quản lý lịch khám bệnh
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SidebarAdmin;
