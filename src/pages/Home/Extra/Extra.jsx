import React from 'react';

const Extra = () => {
    return (
        <div>
            <section className="py-16 px-4 max-w-7xl mx-auto space-y-6">

                {/* Card 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6">
                    <img
                        src="public/assets/location-merchant.png"
                        alt="Feature 1"
                        className="w-full md:w-48 h-48 object-contain"
                    />

                    <div>
                        <h3 className="text-xl text-black font-semibold mb-2">
                           Live Tracking
                        </h3>
                        <p className="text-gray-600">
                            Our system is optimized for speed and reliability, ensuring smooth
                            performance even under heavy load.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6">
                    <img
                        src="public/assets/safe-delivery.png"
                        alt="Feature 2"
                        className="w-full md:w-48 h-48 object-contain"
                    />

                    <div>
                        <h3 className="text-xl text-neutral-900 font-semibold mb-2">
                            Quick Response
                        </h3>
                        <p className="text-gray-600">
                            We use industry-standard security practices to keep your data safe
                            and protected at all times.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-6">
                    <img
                        src="public/assets/tiny-deliveryman.png"
                        alt="Feature 3"
                        className="w-full md:w-48 h-48 object-contain"
                    />

                    <div>
                        <h3 className="text-xl text-black font-semibold mb-2">
                            Fast Delivery
                        </h3>
                        <p className="text-gray-600">
                            Integrate seamlessly with your existing tools and workflows without
                            any complicated setup.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Extra;