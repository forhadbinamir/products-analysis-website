import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import useProducts from '../Hooks/Products';
import Review from '../Review/Review';
import image from '../../Images/Apple-watch-series7.jpg'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [products, setProducts] = useProducts()
    const sliceProducts = products.slice(0, 3)
    const navigate = useNavigate()
    const handleAllReviews = () => {
        const path = `/reviews`
        navigate(path)
    }
    return (
        <div className='bg-gray-100 py-10'>
            <div className="home-display-section flex justify-around items-center">
                <div className="content-area pl-10 text-left">
                    <h1 className='text-4xl font-bold'>Your Best Watch</h1>
                    <h1 className='text-blue-700 text-4xl font-bold'>Your Next Watch</h1>
                    <p className='mt-5'>The Apple Watch 7 is basically the Watch 6 with a slightly larger screen and the ability to charge faster – most people will likely choose the Watch 7 because of the new attractive colors it comes in, rather than any new features... .</p>
                    <div className="live-demo flex items-center bg-indigo-200 w-32 py-3 mt-10 text-blue-600 rounded font-bold hover:bg-indigo-300 ">
                        <button className='pl-3 mr-1 font-bold hover:pr-1'>Live Demo</button>
                        <ArrowRightIcon className='w-4 h-4'></ArrowRightIcon>
                    </div>
                </div>
                <div className="img-area">
                    <img src={image} alt="" />
                </div>
            </div>
            <h2 className='text-center text-4xl my-10 py-5'>Client Reviews</h2>
            <div className='w-10/12 mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-16'>
                    {
                        sliceProducts.map(product => <Review
                            id={product.id}
                            product={product}
                        ></Review>)

                    }
                </div>
                <div onClick={handleAllReviews} className="see-more flex items-center bg-indigo-200 w-32 py-3 mt-10 text-blue-600 rounded font-bold hover:bg-indigo-300 ">
                    <button className='pl-3 mr-1 font-bold hover:pr-1'>See More</button>
                    <ArrowRightIcon className='w-4 h-4'></ArrowRightIcon>
                </div>
            </div>

        </div>
    );
};

export default Home;