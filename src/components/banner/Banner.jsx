import React, { useState, useEffect } from 'react';

const images = [
    'https://images.pexels.com/photos/2305442/pexels-photo-2305442.jpeg',
    'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg',
    'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg',
    'https://res.cloudinary.com/collegeseek/image/upload/v1706034008/bjbc31va9mwqildibprn.png',
];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div 
            className="w-full h-96 flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            <h1 className="text-6xl text-white leading-none mb-4">Seek Space</h1>
            <p className="text-xl bg-white px-4 py-2 rounded-lg">College Seek</p>
            
            <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-black hover:bg-opacity-20 rounded-full transition-colors duration-300"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
            </button>
            
            <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-black hover:bg-opacity-20 rounded-full transition-colors duration-300"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
            </button>
        </div>
    );
};

export default Banner;
