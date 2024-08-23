import React from 'react';
import sectionImg from '~/Assets/img/section-img.png';

function Feautes() {
    return (
        <section className="Feautes section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Chúng Tôi Luôn Sẵn Sàng Giúp Đỡ Bạn & Gia Đình Bạn</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn và gia đình với dịch vụ chăm sóc sức khỏe
                                tận tâm và chuyên nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="signle-icon">
                                <i className="icofont icofont-ambulance-cross"></i>
                            </div>
                            <h3>Giúp Đỡ Khẩn Cấp</h3>
                            <p>
                                Dịch vụ cấp cứu 24/7 với đội ngũ bác sĩ và thiết bị y tế hiện đại, sẵn sàng xử lý mọi
                                tình huống khẩn cấp.
                            </p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="signle-icon">
                                <i className="icofont icofont-medical-sign-alt"></i>
                            </div>
                            <h3>Nhà Thuốc Phong Phú</h3>
                            <p>
                                Nhà thuốc của chúng tôi cung cấp một loạt các sản phẩm dược phẩm chất lượng cao để đáp
                                ứng mọi nhu cầu của bạn.
                            </p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features last">
                            <div className="signle-icon">
                                <i className="icofont icofont-stethoscope"></i>
                            </div>
                            <h3>Điều Trị Y Tế</h3>
                            <p>
                                Dịch vụ điều trị y tế toàn diện với các chuyên gia hàng đầu và công nghệ tiên tiến nhất
                                để đảm bảo sức khỏe tốt nhất cho bạn.
                            </p>
                        </div>
                        {/* End Single features */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feautes;
