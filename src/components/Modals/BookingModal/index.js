import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './BookingModal.scss';
import bs3 from '../../../assets/img/doctor/bs3.jpg';

function BookingModal({ show, handleClose, timeSlot, selectedDay }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin đặt lịch khám bệnh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Modal_Booking_content">
                        <div className="Modal_Booking_content_doctor">
                            <img src={bs3} alt="" />
                            <div className="Modal_Booking_content_doctor_text">
                                <h4>BSCKII Dương Minh Trí</h4>
                                <p>
                                    {timeSlot && selectedDay
                                        ? `Bạn đặt lịch vào: ${selectedDay}, ${timeSlot}`
                                        : 'Please select a time slot and day.'}
                                </p>
                                <p>Miễn phí đặt lịch</p>
                                <p>Giá khám: 500.000VNĐ</p>
                            </div>
                        </div>
                        <div className="Modal_Booking_content_info">
                            <div className="row">
                                <div className="col-lg-6 form-group">
                                    <label>Tên bệnh nhân</label>
                                    <input className="form-control" />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label>Số điện thoại</label>
                                    <input className="form-control" />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label>Địa chỉ email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label>Địa chỉ liên lạc</label>
                                    <input className="form-control" />
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label>Lý do khám</label>
                                    <input className="form-control" />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label>Ngày sinh</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label>Giới tính</label>
                                    <select className="form-control">
                                        <option value="">--Chọn giới tính--</option> {/* Placeholder option */}
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BookingModal;
