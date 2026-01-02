import React from 'react';

const OurServices = () => {
    return (
        <div className='p-10 '> 
            <section class="py-16 bg-gray-50 rounded-2xl">
                <div class="max-w-7xl mx-auto px-4">

                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                            Our Services
                        </h2>
                        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
                            We provide modern, scalable, and high-quality solutions tailored to your business needs.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div class="bg-white rounded-xl shadow-md p-6 hover:bg-green-300 transition">
                            <img src="https://via.placeholder.com/80" alt="Service 1" class="mb-4"/>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    Express and Standard Delivery
                                </h3>
                                <p class="text-gray-600">
                                    Building fast, responsive, and secure websites using modern technologies.
                                </p>
                        </div>

                        <div class="bg-white rounded-xl shadow-md p-6 hover:bg-green-500 transition">
                            <img src="https://via.placeholder.com/80" alt="Service 2" class="mb-4"/>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    Mobile Apps
                                </h3>
                                <p class="text-gray-600">
                                    Creating user-friendly mobile applications for both Android and iOS platforms.
                                </p>
                        </div>

                        <div class="bg-white rounded-xl shadow-md p-6 hover:bg-green-500 transition">
                            <img src="https://via.placeholder.com/80" alt="Service 3" class="mb-4"/>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    UI / UX Design
                                </h3>
                                <p class="text-gray-600">
                                    Designing clean and intuitive interfaces that improve user experience.
                                </p>
                        </div>

                        <div class="bg-white rounded-xl shadow-md p-6 hover:bg-green-500 transition">
                            <img src="https://via.placeholder.com/80" alt="Service 4" class="mb-4"/>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    Backend Solutions
                                </h3>
                                <p class="text-gray-600">
                                    Developing scalable backend systems with secure APIs and databases.
                                </p>
                        </div>

                        <div class="bg-white rounded-xl shadow-md p-6 hover:bg-green-500 transition">
                            <img src="https://via.placeholder.com/80" alt="Service 5" class="mb-4"/>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    Cloud Services
                                </h3>
                                <p class="text-gray-600">
                                    Deploying and managing applications efficiently on cloud platforms.
                                </p>
                        </div>

                        <div class="bg-white rounded-xl shadow-md p-6 hover:bg-green-500 transition">
                            <img src="https://via.placeholder.com/80" alt="Service 6" class="mb-4"/>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    Maintenance & Support
                                </h3>
                                <p class="text-gray-600">
                                    Providing continuous updates, monitoring, and technical support.
                                </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurServices;