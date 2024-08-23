import React from 'react';
import slider from '~/Assets/img/slider.jpg';
import slider2 from '~/Assets/img/slider2.jpg';
import slider3 from '~/Assets/img/slider3.jpg';

function Slider() {
    return (
        <section className="slider ">
            <div className="hero-slider">
                {/* Bắt đầu Slider */}
                <div className="single-slider" style={{ backgroundImage: `url(${slider2})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text">
                                    <h1>
                                        Chúng Tôi Cung Cấp Dịch Vụ <span>Y Tế</span> Mà Bạn Có Thể{' '}
                                        <span>Tin Tưởng!</span>
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl
                                        pellentesque, faucibus libero eu, gravida quam.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">
                                            Đặt Lịch Hẹn
                                        </a>
                                        <a href="#" className="btn primary">
                                            Tìm Hiểu Thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kết thúc Slider */}

                {/* Bắt đầu Slider */}
                <div className="single-slider" style={{ backgroundImage: `url(${slider})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text">
                                    <h1>
                                        Chúng Tôi Cung Cấp Dịch Vụ <span>Y Tế</span> Mà Bạn Có Thể{' '}
                                        <span>Tin Tưởng!</span>
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl
                                        pellentesque, faucibus libero eu, gravida quam.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">
                                            Đặt Lịch Hẹn
                                        </a>
                                        <a href="#" className="btn primary">
                                            Về Chúng Tôi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kết thúc Slider */}

                {/* Bắt đầu Slider */}
                <div className="single-slider" style={{ backgroundImage: `url(${slider3})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text">
                                    <h1>
                                        Chúng Tôi Cung Cấp Dịch Vụ <span>Y Tế</span> Mà Bạn Có Thể{' '}
                                        <span>Tin Tưởng!</span>
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl
                                        pellentesque, faucibus libero eu, gravida quam.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">
                                            Đặt Lịch Hẹn
                                        </a>
                                        <a href="#" className="btn primary">
                                            Liên Hệ Ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kết thúc Slider */}
            </div>
        </section>
    );
}

export default Slider;
