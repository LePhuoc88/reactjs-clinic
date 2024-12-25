import './DoctorDetail.scss';
import { Link } from 'react-router-dom';
import bs3 from '../../assets/img/doctor/bs3.jpg';
import { MdOutlineLocationOn } from 'react-icons/md';
import DayDropdown from '../../components/DayDropdown';
import Examination_address from '../../components/Examination_address';
import FacebookComments from '../../components/FacebookComments';

function DoctorDetail() {
    return (
        <>
            <div className="wrap">
                <div className="doctor__detail">
                    <div className="header_left">
                        <div className="header_path">
                            <Link to="/">Trang chủ</Link>
                        </div>
                        <div className="vertical">
                            <p> | </p>
                        </div>
                        <div className="header_text">
                            <p>Thông tin bác sĩ</p>
                        </div>
                    </div>
                    <div className="doctor__detail_content">
                        <div className="doctor__detail_content_img">
                            <img src={bs3} alt="" />
                        </div>
                        <div className="doctor__detail_content_text">
                            <h3>BSCKII Dương Minh Trí</h3>
                            <p>
                                Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống Hiện là Trưởng khoa Phẫu
                                thuật Cột sống, Bệnh viện Việt Đức Bác sĩ nhận khám từ 7 tuổi trở lên
                            </p>
                            <div className="doctor__detail_content_text_address">
                                <MdOutlineLocationOn />
                                <p>Thành phố Hồ Chí Minh</p>
                            </div>
                            <iframe
                                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout&action&size&share=true&height=35&appId"
                                width="450"
                                height="35"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <DayDropdown />
                        </div>
                        <div className="col-lg-6 br_left">
                            <Examination_address />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__detail_text">
                <div className="wrap">
                    <h4>BSCKII Dương Minh Trí</h4>
                    <ul>
                        <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                        <li>
                            Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội
                        </li>
                        <li>
                            Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch
                            Mai, Bệnh viện Hữu nghị Việt Đức, Bệnh Viện E.
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
                    <p className="home__detail_text_title">Khám và điều trị</p>
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
                    <p className="home__detail_text_title">Quá trình đào tạo</p>
                    <ul>
                        <li>Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Nội khoa, Đại học Y Hà Nội (2020)</li>
                        <li>Tốt nghiệp Thạc sĩ chuyên ngành Nội Tổng quát, Đại học Y khoa Phạm Ngọc Thạch (2014)</li>
                        <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y Dược TP.HCM (2006)</li>
                        <li>Chứng chỉ Sơ bộ Cơ xương khớp, Bệnh viện Chợ Rẫy (2014)</li>
                        <li>Tu nghiệp chuyên môn tại các nước Hà Lan, Úc, Bồ Đào Nha, Dubai,...</li>
                    </ul>
                </div>
            </div>
            <div className="wrap">
                <div className="fb__comment">
                    <FacebookComments />
                </div>
            </div>
        </>
    );
}

export default DoctorDetail;
