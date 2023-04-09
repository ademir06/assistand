import React from 'react';
import '../course/course.scss'

const Course = ({dark}: any) => {
    return (
        <div className='course' style={{
            background: dark ? '#fff' : ''
        }}>
            <div className="container">
                <div className="course-one">
                    <div className="course-one__button">
                        <button>
                            Заказать курс
                        </button>
                    </div>
                    <div className="course-one__text">
                        <div className="course-one__text-p">
                            <p>Учеников всего:</p>
                            <h3>200</h3>
                        </div>
                        <div className="course-one__text-h3">
                            <p>Учеников всего:</p>
                            <h3>200</h3>
                        </div>
                    </div>

                    <div className="course-one__student">
                        <div className="course-one__student-number">
                            <p>Заработано учениками:</p>
                            <h3>400 000₽</h3>
                        </div>
                        <div className="course-one__student-border">
                            <div className="course-one__student-border__one"></div>
                            <div className="course-one__student-border__right"></div>
                        </div>
                        <div className="course-one__student-zero">
                            <p>0</p>
                            <h3>1 000 000₽</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;