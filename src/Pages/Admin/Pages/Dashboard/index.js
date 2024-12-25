import './Dashboard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div className="Dashboard">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/Dashboard">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Thống kê</p>
                    </div>
                </div>
                <div className="good-morning-blk">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="morning-user">
                                <h2>
                                    Hello, <span>Lê Tấn Phước</span>
                                </h2>
                                <p>Chào mừng bạn đã quay trở lại!</p>
                            </div>
                        </div>
                        <div className="col-md-6 position-blk">
                            <div className="morning-img">
                                <img src="assets/img/morning-img-01.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <div className="dash-boxs comman-flex-center">
                                <img src="assets/img/icons/calendar.svg" alt />
                            </div>
                            <div className="dash-content dash-count">
                                <h4>Cuộc hẹn</h4>
                                <h2>
                                    <span className="counter-up">250</span>
                                </h2>
                                <p>
                                    <span className="passive-view">
                                        <i className="feather-arrow-up-right me-1" />
                                        40%
                                    </span>{' '}
                                    so với tháng trước
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <div className="dash-boxs comman-flex-center">
                                <img src="assets/img/icons/profile-add.svg" alt />
                            </div>
                            <div className="dash-content dash-count">
                                <h4>Bệnh nhân mới</h4>
                                <h2>
                                    <span className="counter-up">140</span>
                                </h2>
                                <p>
                                    <span className="passive-view">
                                        <i className="feather-arrow-up-right me-1" />
                                        20%
                                    </span>{' '}
                                    so với tháng trước
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <div className="dash-boxs comman-flex-center">
                                <img src="assets/img/icons/scissor.svg" alt />
                            </div>
                            <div className="dash-content dash-count">
                                <h4>Hoạt động</h4>
                                <h2>
                                    <span className="counter-up">56</span>
                                </h2>
                                <p>
                                    <span className="negative-view">
                                        <i className="feather-arrow-down-right me-1" />
                                        15%
                                    </span>{' '}
                                    so với tháng trước
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <div className="dash-boxs comman-flex-center">
                                <img src="assets/img/icons/empty-wallet.svg" alt />
                            </div>
                            <div className="dash-content dash-count">
                                <h4>Doanh thu</h4>
                                <h2>
                                    $<span className="counter-up"> 20,250</span>
                                </h2>
                                <p>
                                    <span className="passive-view">
                                        <i className="feather-arrow-up-right me-1" />
                                        30%
                                    </span>{' '}
                                    so với tháng trước
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="chart-title patient-visit">
                                    <h4>Tỉ lệ bệnh nhân theo giới tính</h4>
                                    <div>
                                        <ul className="nav chat-user-total">
                                            <li>
                                                <i className="fa fa-circle current-users" aria-hidden="true" />
                                                Male 75%
                                            </li>
                                            <li>
                                                <i className="fa fa-circle old-users" aria-hidden="true" /> Female 25%
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="input-block mb-0">
                                        <select className="form-control select">
                                            <option>2024</option>
                                            <option>2023</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="patient-chart" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                        <div className="card">
                            <div className="card-body">
                                <div className="chart-title">
                                    <h4>Bệnh nhân theo khoa</h4>
                                </div>
                                <div id="donut-chart-dash" className="chart-user-icon">
                                    <img src="assets/img/icons/user-icon.svg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Area Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-line-area" />
                                <div id="s-line-area" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Bar Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-bar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
