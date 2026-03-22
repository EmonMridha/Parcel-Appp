import React from "react";

const FAQ = () => {
    const faqsList = [
        {
            q: "How will I know when my package has arrived?",
            a: "We provide multiple notification options. You can opt-in to receive real-time alerts via SMS, email, or push notifications through our mobile app. You will be notified the moment a package is scanned as delivered and again if it is ready for pickup."
        },
        {
            q: "What do I need to bring to pick up my package?",
            a: "Please bring a government-issued photo ID (such as a driver’s license or passport) and your unique pickup code. The pickup code is sent to you via email and SMS upon delivery confirmation. If someone else is picking up on your behalf, they must present the pickup code and their own photo ID."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "How long do you hold packages before returning them to the sender?",
            a: " Standard packages are held for 7 calendar days from the date of delivery. Perishable items are held for 24 hours. After this period, unclaimed packages will be returned to the sender or disposed of according to our policy. You can request an extension via your dashboard before the deadline."
        },
        {
            q: "Can I schedule a package pickup from my home or office?",
            a: "Yes. Once logged in, navigate to the Send a Parcel section and select Schedule Pickup. You can select your preferred date and time window. Our courier partners will collect your pre-labeled package from your specified location."
        }
    ]

    return (
        <section className='py-14 bg-gray-800'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className='flex-1'>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-cyan-400'>
                            Frequently asked questions
                        </h3>
                        <p className='mt-3 text-white text-3xl font-extrabold sm:text-4xl'>
                            All information you need to know
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0'>
                    <ul className='space-y-4 divide-y divide-gray-700'>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
                                key={idx}>
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-200">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='mt-3 text-gray-300 leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
