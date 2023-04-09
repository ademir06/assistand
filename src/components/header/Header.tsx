import React from 'react';
import '../header/Header.scss'
import logo from '../../img/logo.png'

const Header = ({getDark, dark}: any) => {

    return (
        <div className='header'>
            <div className="container">
                <div className='header__block'>
                    <div className='header__block--logo'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='header__block--nav'>
                        <a href="#">Главная</a>
                        <a href="#">Курсы</a>
                        <a href="#">Расписание</a>
                        <a href="#">Преподаватели</a>
                        <a href="#">Рассылка</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className='header__block--btn'>
                        <button onClick={() => getDark(dark)}>
                            Зайти в кабинет
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;