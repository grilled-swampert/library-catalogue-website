import React from 'react';
import Header from '../../components/header';
import ContentImg from '../home/images/header_image.jpg';

export default function Home() {
    return (
        <div>
            <Header />
            <div className='content-image'>
                <img src={ContentImg} alt="Content" className='image'/>
            </div>
            <div className="content-rectangle">
                <div className="content">
                    <div className="content-container">
                        CURRENT EVENT
                    </div>
                    <div className="saleInfo">
                        <h1>SECOND BOOK SALE</h1>
                        <h3>Second book exhibition sale this year starting the 3rd week of February.</h3>
                    </div>
                    <button className="saleVisit" style={{position: 'static'}}>Visit the SALE</button>
                </div>
            </div>
        </div>
    )
};

