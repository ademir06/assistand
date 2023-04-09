import React from 'react';
import music from '../../img/image.png'
import '../Studys/Studys.scss'

const Studys = ({dark}: any) => {
    return (
        <div className='study' style={{
            background: dark ? '#FFF' : ''
        }}>
            <div className="container">
                <div className="study-one">
                    <div className="study-one__img">
                        <img src={music} alt=""/>
                    </div>
                    <div className="study-one__text">
                        <h1>Чем мы занимаемся?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat <br/>
                            elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum <br/>
                            vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. <br/>
                            Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, <br/>
                            sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu <br/>
                            malesuada arcu interdum placerat nisi, lobortis.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Studys;