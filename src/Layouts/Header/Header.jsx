import React from 'react';
import logo from '~/Assets/img/logo.png';

function Header() {
    return (
        <header className="header">
            {/* Header Inner */}
            <div className="header-inner">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                {/* Start Logo */}
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={logo} alt="#" />
                                    </a>
                                </div>
                                {/* Mobile Nav */}
                                <div className="mobile-nav"></div>
                            </div>
                            <div className="col-lg-7 col-md-9 col-12">
                                {/* Main Menu */}
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            <li className="active">
                                                <a href="#">Trang chủ</a>
                                            </li>
                                            <li>
                                                <a href="#">Bác sĩ</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Dịch vụ <i className="icofont-rounded-down"></i>
                                                </a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="404.html">Chỉnh nha mắc cài truyền thống</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Nha khoa thẩm mĩ</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Nhổ răng không</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Nha khỏa trẻ em</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Răng giả tháo lắp</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Bảng giá</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Tin tức <i className="icofont-rounded-down"></i>
                                                </a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="blog-single.html">Tin tức 1</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12">
                                <div className="get-quote">
                                    <a href="appointment.html" className="btn">
                                        Đặt lịch khám
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
