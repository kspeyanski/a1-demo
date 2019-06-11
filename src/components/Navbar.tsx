import * as React from 'react';
import { Link } from '@reach/router';


export const Navbar: React.FunctionComponent = () => {
    return (
        <div className="container-fluid" id="navbar">
            <header className="header position-fixed w-100" >
                <div className="TopMenu_wrapper__1Z6EX TopMenu_scrolled__RLUo7">
                    <div className="content-wrapper TopMenu_container__3YAfY position-relative h-100">
                        <div className="h-100 d-flex justify-content-between">
                            <ul className="h-100 nav">
                                <li className="d-flex align-items-center TopMenu_primary__1Jhcm nav-item">
                                    <a href="/moyat-a1-upravlyavay-sam-svoite-uslugi" className="nav-link">Моят А1</a>
                                </li>
                            </ul>
                            <div className="TopMenu_secondary__25kh9 d-flex align-items-center">
                                <div className="TopMenu_shoppingCart__3RY7a d-flex align-items-center">
                                    <i className="ico basket gray size-32"></i>
                                </div>
                                <div className="TopMenu_search__IPg5N d-flex align-items-center">
                                    <i className="ico search gray size-32"></i>
                                    <span className="TopMenu_label__2dOaw">Търсене</span>
                                </div>
                                <div className="TopMenu_help__2p0QP d-flex align-items-center">
                                    <i className="ico question gray size-32"></i>
                                    <span className="TopMenu_label__2dOaw">Помощ</span>
                                </div>
                                <div className="mr-1 d-flex align-items-center TopMenu_user__2fdhp dropdown">
                                    <button type="button" aria-haspopup="true" aria-expanded="false" className="TopMenu_trigger__33_Qo ml-2 btn btn-secondary">
                                        <i className="ico user gray size-32"></i>KendoReact </button>
                                    <div tabIndex={-1} role="menu" aria-hidden="true" className="TopMenu_dropdown__3A84D m-0 dropdown-menu">
                                        <a className="dropdown-item" tabIndex={0} role="menuitem" href="/moyat-a1-profil">Моят профил</a>
                                        <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">Изход</button>
                                    </div>
                                </div>
                                <div className="LanguageSwitch_langTab__3K-wS user-select-none d-flex align-items-center mr-3">
                                    <button className="undefined px-0 border-0 bg-white d-block position-relative text-center text-uppercase">en</button>
                                </div>
                            </div>
                        </div>
                        <div className="TopMenu_logo__2tlyn position-absolute">
                            <a className="p-3 h-100 d-block" href="/">
                                <img src="https://www.a1.bg/sites/1/themes/main/images/layout/A1-logo.jpg" className="d-block w-100 h-auto" alt="A1 logo" />
                            </a>
                        </div>
                    </div></div><section className="bg-white p-0 position-relative Navigation_section__5dQAF Navigation_scrolled__2Vb-5 ">
                    <div className="content-wrapper Navigation_wrapper__3klOq">
                        <nav className="d-block p-0 navbar navbar-light">
                            <div className="d-flex justify-content-between Desktop_content__1LfJL Desktop_scrolled__9I8QR">
                                <ul className="nav">
                                    <li className="Desktop_item__2x0qM Desktop_scrolled__9I8QR nav-item">
                                        <Link className="mx-2 p-0 align-items-center d-flex position-relative nav-link active" aria-current="page" to="/">
                                            Начало
                                        </Link>
                                    </li>
                                    <li className="Desktop_item__2x0qM Desktop_scrolled__9I8QR nav-item">
                                        <Link className="mx-2 p-0 align-items-center d-flex position-relative nav-link" to="/services">
                                            Моите услуги
                                        </Link>
                                    </li>
                                    <li className="Desktop_item__2x0qM Desktop_scrolled__9I8QR nav-item">
                                        <Link className="mx-2 p-0 align-items-center d-flex position-relative nav-link" to="/personal-info">
                                            Моят профил
                                        </Link>
                                    </li>
                                </ul>
                                <div className="Desktop_item__2x0qM Desktop_scrolled__9I8QR">
                                    <a className="mx-2 p-0 align-items-center d-flex position-relative text-decoration-none" href="/">
                                        <i className="ico globe size-40 gray"></i>
                                        A1.bg
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
        </div>
    )
}