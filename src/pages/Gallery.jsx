import React, { useState, useEffect } from 'react';
import styles from '../pagesCss/Gallery.module.css';

const images = [
    'images/des1.jpeg', 'images/des2.jpeg', 'images/des3.jpeg', 'images/des4.jpeg',
    'images/des5.jpeg', 'images/des6.jpeg', 'images/des7.jpeg', 'images/des8.jpeg',
    'images/des9.jpeg', 'images/des10.jpeg', 'images/des11.jpeg', 'images/des12.jpeg'
];

const Gallery = () => {
    const [visibleCards, setVisibleCards] = useState(6);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleViewMore = () => {
        setVisibleCards(images.length);
    };

    const updateMedia = () => {
        const isCurrentlyMobile = window.innerWidth <= 768;
        setIsMobile(isCurrentlyMobile);

        if (!isCurrentlyMobile) {
            setVisibleCards(images.length);
        } else {
            setVisibleCards(6);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        updateMedia(); // Initial check

        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <section className={`mt-5 bg-light ${styles.galleryContainer}`}>
            <h1 className='fw-bold fs-1 text-center'>Our <span className='text main-hover'>Gallery</span></h1>
            <div className={styles.imageGrid}>
                {images.slice(0, visibleCards).map((image, index) => (
                    <div key={index} className={styles.card}>
                        <img src={image} alt={`Gallery image ${index + 1}`} onError={() => console.error(`Failed to load image: ${image}`)} />
                    </div>
                ))}
            </div>
            {isMobile && visibleCards < images.length && (
                <div className={`text-center mt-3 ${styles.viewMoreButton}`}>
                    <button className="btn btn-primary" onClick={handleViewMore}>View More</button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
