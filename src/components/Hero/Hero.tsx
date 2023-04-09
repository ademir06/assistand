import React from 'react';
import img from '../../img/main-screen__bgc.png'
import '../Hero/Hero.scss'

const Hero = ({dark}: any) => {
    return (
        <div className='hero'>
            <div className="hero-img">
                <img src={img} alt=""/>
            </div>
            <div className="hero-text">
                <div className="hero-text__h1">
                    <h1 >
                        Первый курс <br/>
                        по компьютерной сборке
                    </h1>
                </div>
                <div className="hero-text__block">
                    <div className="hero-text__block-one">
                        <h1>18</h1>
                        <p>Дней</p>
                    </div>
                    <div className="hero-text__block-one">
                        <h1>18</h1>
                        <p>Дней</p>
                    </div>
                    <div className="hero-text__block-one">
                        <h1>18</h1>
                        <p>Дней</p>
                    </div>
                    <div className="hero-text__block-one">
                        <h1>18</h1>
                        <p>Дней</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;