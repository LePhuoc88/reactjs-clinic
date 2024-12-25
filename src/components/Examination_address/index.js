import './Examination_address.scss';
import React, { useState } from 'react';

const Examination_address = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <div className="doctor__ex_adress">
                <h4>ĐỊA CHỈ KHÁM</h4>
                <h5>Phòng khám Cơ Xương Khớp Bác sĩ Dương Minh Trí</h5>
                <p>182b Lê Văn Sỹ, Phường 10, Quận Phú Nhuận, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="doctor__ex_price">
                <div className="doctor__ex_price_content">
                    <div className="doctor__ex_price_header">
                        <h4>GIÁ KHÁM: </h4>
                        {!showDetails ? (
                            <>
                                <p>500.000 VNĐ</p>
                                <span className="doctor__ex_price_see_more" onClick={toggleDetails}>
                                    Xem chi tiết
                                </span>
                            </>
                        ) : null}
                    </div>

                    {showDetails && (
                        <>
                            <div className="doctor__ex_price_content_detail">
                                <div className="doctor__ex_price_content_detail_pri">
                                    <span>
                                        <p>Giá khám</p>
                                        <p>Chưa bao gồm chi phí chụp chiếu, xét nghiệm</p>
                                    </span>
                                    <p>500.000 VNĐ</p>
                                </div>
                                <div className="doctor__ex_price_content_detail_des">
                                    <p>Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ</p>
                                </div>
                            </div>
                            <div className="doctor__ex_price_see_more_bottom">
                                <span onClick={toggleDetails}>Ẩn bản giá</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Examination_address;
