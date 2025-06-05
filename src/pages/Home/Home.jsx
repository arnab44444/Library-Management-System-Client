import React from 'react';
import { useLoaderData } from 'react-router';
import ImageSlider from './ImageSlider';
import Categories from './Categories/Categories';

const Home = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div>
        <ImageSlider></ImageSlider>

        <div className='mx-auto'>
            <Categories></Categories>
        </div>
            
        </div>
    );
};

export default Home;