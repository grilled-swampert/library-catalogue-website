import React from 'react';
import Header from '../../components/header';
import ContentImg from '../home/images/header_image.jpg';
import VideoSrc from '../home/videos/libraryintro.mp4';
import Book1 from '../home/images/book1.jpg';
import Book2 from '../home/images/book2.jpg';
import Book3 from '../home/images/book3.jpg';
import Book4 from '../home/images/book4.jpg';
import Book5 from '../home/images/book5.jpg';
import Book6 from '../home/images/book6.jpg';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newWidth = Math.max(50, 100 - scrollPosition * 0.05); // Adjust the width based on scroll
            const newBorderRadius = Math.min(50, scrollPosition * 0.1); // Adjust the border radius based on scroll

            gsap.to(videoRef.current, {
                width: `${newWidth}%`,
                borderRadius: `${newBorderRadius}px`,
                duration: 0.5,
                ease: 'power2.out',
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleVideoEnd = () => {
        videoRef.current.play();
    };

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
            <div className="video-container">
                <video 
                    ref={videoRef} 
                    src={VideoSrc} 
                    controls 
                    autoPlay 
                    muted 
                    className='video'
                    style={{ width: '100%', borderRadius: '0px' }}
                    onEnded={handleVideoEnd} 
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='highlights'>
                <h1 className='highlights-title'>Our Highlights</h1>
                <button class="catalog-button"> Explore Catalogue </button>
            </div>

            <div class="container">
                <div class="card__container">
                    <article class="card__article">
                    <img src={Book1} class="card__img" alt="wude"/>

                    <div class="card__data">
                        <p>Read More</p>
                    </div>
                    </article>

                    <article class="card__article">
                    <img src={Book2} class="card__img" alt="wude"/>

                    <div class="card__data">
                         <p>Read More</p>
                    </div>
                    </article>

                    <article class="card__article">
                    <img src={Book3} class="card__img" alt="wude"/>

                    <div class="card__data">
                        <p>Read More</p>
                    </div>
                    </article>
                    <article class="card__article">
                    <img src={Book4} class="card__img" alt="wude"/>

                    <div class="card__data">
                       <p>Read More</p>
                    </div>
                    </article>

                    <article class="card__article">
                    <img src={Book5} class="card__img" alt="wude"/>

                    <div class="card__data">
                        <p>Read More</p>
                    </div>
                    </article>

                    <article class="card__article">
                    <img src={Book6} class="card__img" alt="wude"/>

                    <div class="card__data">
                        <p>Read More</p>
                    </div>
                    </article>
                </div>
            </div>
            
        </div>
    );
};
