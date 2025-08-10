import React from 'react';
import { useLoaderData } from 'react-router';
import Categories from './Categories/Categories';
import BookReviewSection from './BookReviewSection';
import About from './About';

import Banner from './Banner';
import HappyClients from './HappyClients';
import StatsSection from './StatsSection';

const Home = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div>

         {/* etai imageSlider */}
        <Banner></Banner>

        <div className='mx-auto'>
            <Categories></Categories>
            {/* <BookReviewSection></BookReviewSection> */}
            <HappyClients></HappyClients>
            <About></About>
            <StatsSection></StatsSection>
        </div>
            
        </div>
    );
};

export default Home;