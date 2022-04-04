import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='lg:w-9/12 md:w-full mr-5' >
                <h1 className='text-4xl font-bold p-10 mb-0 pb-5 text-left ml-10'>What is Context API</h1>
                <p className='text-left shadow-slate-300 bg-slate-200 rounded ml-10 p-10'>
                    If a child component at nth level require a property from a parent component at any level, the information needs to be passed one level by level through props. In an application with lot of nested components, it is difficult.

                    Context API helps to directly send an information from a parent component to a child component at any level.
                </p>
            </div>
            <div className='lg:w-9/12 lg:ml-80 md:w-full mr-5' >
                <h1 className='text-4xl font-bold p-10 mb-0 pb-5 text-left ml-10'>What is Semantic tag</h1>
                <p className='text-left shadow-slate-300 bg-slate-200 rounded ml-10 p-10'
                >
                    A semantic element clearly describes its meaning to both the browser and the developer.
                    Examples of non­semantic elements: div and span ­ Tells nothing about its content.
                    Examples of semantic elements: 'form' table, and article ­ Clearly defines its
                    content.

                </p>
            </div>
            <div className='lg:w-9/12 md:w-full mr-5' >
                <h1 className='text-4xl font-bold p-10 mb-0 pb-5 text-left ml-10'>Difference between block and inline-block?</h1>
                <p className='text-left shadow-slate-300 bg-slate-200 rounded ml-10 p-10'>
                    Difference between block and inline-block?
                    Block Elements occupy the full width irrespective of their sufficiency. Inline elements don't start in a new line. Block elements always start in a line. Inline elements allow other inline elements to sit behind.
                </p>
            </div>
        </div>
    );
};

export default Blogs;