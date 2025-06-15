import React from 'react';
import { useLoaderData } from 'react-router';
import Categories from './Categories/Categories';
import BookReviewSection from './BookReviewSection';
import About from './About';
import ImageSlider from './ImageSlider';
import HomeAnimation from './HomeAnimation';
import Banner from './Banner';

const Home = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div>

        <Banner></Banner>

        {/* <HomeAnimation></HomeAnimation> */}

        {/* <ImageSlider></ImageSlider>  */}

        


        <div className='mx-auto'>
            <Categories></Categories>
            <BookReviewSection></BookReviewSection>
            <About></About>
        </div>
            
        </div>
    );
};

export default Home;