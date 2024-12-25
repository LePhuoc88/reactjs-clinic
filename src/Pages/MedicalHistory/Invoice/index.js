import React from 'react';
import { Link } from 'react-router-dom';
import './Invoice.scss';
import logo from '../../../assets/img/Logo/LOGO_PhuocAn.png';
import codebar from '../../../assets/img/Logo/codebar.jpg';
function Invoice() {
    return (
        <div className="invoice">
            <div className="header_left">
                <div className="header_path">
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="vertical">
                    <p> | </p>
                </div>
                <div className="header_text">
                    <p>Đơn thuốc</p>
                </div>
            </div>

            <div className="row" style={{ width: '920px', margin: 'auto' }}>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="invoice-head-clinic" style={{ marginBottom: '10px' }}>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="invoice-counts">
                                            <h4>
                                                Đơn thuốc số <span>#345766</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* <div className="invoice-counts float-end">
                                            <h4>
                                                Status:
                                                <a
                                                    href="javascript:;"
                                                    className="status-green"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    Success
                                                </a>
                                            </h4>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row custom-invoice">
                                <div className="col-12 col-md-6 m-b-20 invoice__name">
                                    <img src={logo} alt style={{ width: '150px', height: 'auto' }} />
                                    <ul className="list-unstyled invoice-clinic mt-2">
                                        <li style={{ fontWeight: '500', fontSize: '16px' }}>SỞ Y TẾ TỈNH BÌNH DƯƠNG</li>
                                        <li>PHÒNG KHÁM ĐA KHOA PHƯỚC AN</li>
                                        <li>GST No:2914035</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 m-b-20">
                                    <div className="invoice-details">
                                        <img src={codebar} alt="" style={{ width: '200px', height: '40px' }} />
                                        <ul className="list-unstyled invoice-clinic">
                                            <li>Mã y tế: 18065656548</li>
                                            <li>Số hồ sơ: 0000004356825</li>
                                            <li>
                                                {' '}
                                                <h4>
                                                    Ngày khám : <i className="feather-calendar me-2" />
                                                    <span>05/10/2024</span>
                                                </h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="invoice__info">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="invoice__info_name">
                                            <p>Tên bệnh nhân:</p>
                                            <h4>Lê Tấn Phước</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="invoice__info_name">
                                            <p>Giới tính:</p>
                                            <p>Nam</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="invoice__info_name">
                                            <p>SĐT: </p>
                                            <p>0326549846</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice__info_address">
                                    <p>Email:</p>
                                    <p>Phuoctdmu@gmail.com</p>
                                </div>
                                <div className="invoice__info_address">
                                    <p>Địa chỉ:</p>
                                    <p>Tổ 7, Khu phố bình hòa 2, Tân Phước Khánh, Tân Uyên, Bình Dương</p>
                                </div>
                                <div className="invoice__info_address">
                                    <p>Chuẩn đoán:</p>
                                    <p>Đau bụng</p>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-hover border-0 custom-table invoice-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tên thuốc</th>
                                            <th>Số lượng</th>
                                            <th>Loại</th>
                                            <th>Hướng dẫn sử dụng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Paracetamol</td>
                                            <td>25</td>
                                            <td>Viên</td>
                                            <td>Uống sau khi ăn</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Omeprazole</td>
                                            <td>25</td>
                                            <td>Viên</td>
                                            <td>Uống sau khi ăn</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Aspirin</td>
                                            <td>25</td>
                                            <td>Viên</td>
                                            <td>Uống sau khi ăn</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="invoice-info">
                                <h5>Lời dặn của bác sĩ</h5>
                                <p className="text-muted">Tái khám sau 3 tuần</p>
                            </div>
                            <div>
                                {/* <div className="row invoice-payment">
                                    <div className="col-sm-7"></div>
                                    <div className="col-sm-5">
                                        <div className="m-b-20">
                                            <div className="table-responsive no-border">
                                                <table className="table mb-0 border-0 custom-table invoices-table total-fonts">
                                                    <tbody>
                                                        <tr>
                                                            <td className="float-end">Subtotal : $2600</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="float-end">Discount : $100</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="float-end">GST (10%) : $160</td>
                                                        </tr>
                                                        <tr className="bold-total-invoice">
                                                            <td className="float-end">
                                                                <h5>Total : $2760</h5>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-lg-8"></div>
                                    <div className="col-lg-4">
                                        <div className="invoice__info_doctor">
                                            <p>Ngày 05 tháng 10 năm 2024</p>
                                            <p>Bác sĩ điều trị</p>
                                            <h4>Nguyễn Minh Trí</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="invoice-info">
                                    <h5>Thông tin thêm</h5>
                                    <p className="text-muted">
                                        Dùng đúng theo chỉ dẫn, nếu có bất thường đến bệnh viện khám lại ngay hoặc liên
                                        hệ theo số điện thoại 032.666.254
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-12">
                                <div className="doctor-submit float-end">
                                    <a href="javascript:;" className="btn btn-primary submit-form me-2">
                                        Send Invoice
                                    </a>
                                    <a href="javascript:;" className="btn btn-primary cancel-form">
                                        <i className="feather-printer me-2" />
                                        Print
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
