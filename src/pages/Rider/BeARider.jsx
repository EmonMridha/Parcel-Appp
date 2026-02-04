import React, { useState } from 'react';

const BeARider = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const riderData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            city: form.city.value,
            vehicle: form.vehicle.value,
            license: form.license.value,
            experience: form.experience.value,
        };

        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Become a Rider
                </h2>
                <p className="text-gray-500 mb-6">
                    Join our delivery team and start transferring parcels today
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-black font-medium mb-1">Full Name</label>
                        <input name="name" type="text" required className="border-2 border-gray-600" />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">Email Address</label>
                        <input name="email" type="email" required className="border-gray-600 border-2" />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">Phone Number</label>
                        <input name="phone" type="tel" required className="border-2 border-gray-600" />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">City</label>
                        <input name="city" type="text" required className="border-2 border-gray-600 text-black" />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">Vehicle Type</label>
                        <select name="vehicle" required className="border-2 border-gray-600 text-black">
                            <option value="">Select Vehicle Type</option>
                            <option value="bike">Bike</option>
                            <option value="bicycle">Bicycle</option>
                            <option value="car">Car</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">Driving License Number (if any)</label>
                        <input name="license" type="text" className="border-2 border-gray-600 text-black" />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">Delivery Experience (optional)</label>
                        <textarea
                            name="experience"
                            rows="3"
                            className="border-2 text-black border-gray-600 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition"
                    >
                        {loading ? "Submitting..." : "Apply as Rider"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BeARider;