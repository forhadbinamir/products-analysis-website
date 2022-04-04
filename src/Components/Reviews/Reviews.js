import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import useProducts from '../Hooks/Products';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (

        <div className='w-10/12 mx-auto'>
            <h1 className='text-4xl my-5'>All Reviews</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-16'>
                {
                    products.map(product => <AllReviews
                        key={product.id}
                        product={product}
                    ></AllReviews>)
                }
            </div>
        </div>
    );
};

export default Reviews;