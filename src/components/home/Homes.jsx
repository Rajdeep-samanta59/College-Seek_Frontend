
import React from 'react';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Homes = () => {

    return (
        <>
            <Banner />
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/6 sm:w-1/6">
                    <Categories />
                </div>
                <div className="w-full lg:w-5/6 sm:w-5/6">
                    <Posts />
                </div>
            </div>
        </>
    )
}

export default Homes;