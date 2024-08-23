import React from 'react';
import sectionImg from '~/Assets/img/section-img.png';

function Service() {
    return (
        <section className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Chúng Tôi Cung Cấp Các Dịch Vụ Khác Nhau Để Cải Thiện Sức Khỏe Của Bạn</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Khám Phá Các Dịch Vụ Chuyên Nghiệp Của Chúng Tôi Để Đảm Bảo Sức Khỏe Toàn Diện Và Chất
                                Lượng Cuộc Sống Tốt Hơn.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-prescription"></i>
                            <h4>
                                <a href="service-details.html">Điều Trị Tổng Quát</a>
                            </h4>
                            <p>
                                Chăm sóc sức khỏe toàn diện với các phương pháp điều trị chuyên nghiệp và hiện đại nhất.
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-tooth"></i>
                            <h4>
                                <a href="service-details.html">Trắng Răng</a>
                            </h4>
                            <p>Lấy lại nụ cười rạng rỡ với dịch vụ làm trắng răng hiệu quả và an toàn.</p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-heart-alt"></i>
                            <h4>
                                <a href="service-details.html">Phẫu Thuật Tim</a>
                            </h4>
                            <p>
                                Can thiệp phẫu thuật tim chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và công nghệ
                                tiên tiến.
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-listening"></i>
                            <h4>
                                <a href="service-details.html">Điều Trị Tai</a>
                            </h4>
                            <p>Giải pháp điều trị tai chuyên sâu để bảo vệ sức nghe và sức khỏe tai của bạn.</p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-eye-alt"></i>
                            <h4>
                                <a href="service-details.html">Vấn Đề Về Thị Lực</a>
                            </h4>
                            <p>
                                Cải thiện thị lực và chăm sóc đôi mắt của bạn với các dịch vụ điều trị mắt chuyên
                                nghiệp.s
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-blood"></i>
                            <h4>
                                <a href="service-details.html">Truyền Máu</a>
                            </h4>
                            <p>
                                Cung cấp dịch vụ truyền máu an toàn và hiệu quả, hỗ trợ sức khỏe và điều trị kịp thời.
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
