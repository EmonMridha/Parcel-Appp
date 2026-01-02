import React from "react";

const FAQ = () => {
    return (
        <section className="py-16 px-4 max-w-5xl mx-auto">

            <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">
                        What is your service about?
                    </div>
                    <div className="collapse-content text-base-content">
                        <p>
                            We provide high-quality solutions designed to improve efficiency
                            and productivity for businesses of all sizes.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">
                        Is my data secure?
                    </div>
                    <div className="collapse-content text-base-content">
                        <p>
                            Yes. We follow industry-standard security practices to ensure
                            complete data protection.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">
                        Can I cancel anytime?
                    </div>
                    <div className="collapse-content text-base-content">
                        <p>
                            Absolutely. You can cancel or change your plan at any time
                            without any hidden fees.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
