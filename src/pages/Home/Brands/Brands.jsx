import React from 'react';

const Brands = () => {
    return (
        <section class="py-16 px-4 max-w-7xl mx-auto">

            <h2 class="text-2xl text-green-800 md:text-4xl font-bold text-center mb-10">
                We have helped thousands of sales teams worldwide
            </h2>

            <div className='flex justify-center'>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
                    <img src="public/assets/brands/casio.png" alt="Image 1" class="rounded-lg object-contain h-7" />
                    <img src="public/assets/brands/amazon.png" alt="Image 2" class="rounded-lg object-contain h-7" />
                    <img src="public/assets/brands/moonstar.png" alt="Image 3" class="rounded-lg object-contain h-7" />
                    <img src="public/assets/brands/start-people 1.png" alt="Image 4" class="rounded-lg object-contain h-7" />
                    <img src="public/assets/brands/start.png" alt="Image 5" class="rounded-lg object-contain h-7" />
                    <img src="public/assets/brands/randstad.png" alt="Image 6" class="rounded-lg object-contain h-7" />
                </div>
            </div>
        </section>
    );
};

export default Brands;