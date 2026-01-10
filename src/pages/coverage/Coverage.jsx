import { useState } from "react";
import Map from "./Map/Map";

const Coverage = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='m-2 md:m-10 lg: bg-white lg:p-20 p-5 rounded-2xl'>
            <h1 className='lg:text-4xl text-center text-2xl text-green-900 font-bold'>We are available in 64 districts</h1>

            <div className='flex justify-center w-full mt-5'>
                <div>
                    <label className="relative block">

                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="peer w-full rounded-xl border border-gray-300 bg-white px-4 pt-6 pb-2 text-gray-900 
             shadow-sm outline-none transition-all duration-200
             focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
                        />
                        <span
                            className="absolute left-4 top-4 text-gray-400 transition-all duration-200
                        peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            Search Here
                        </span>
                    </label>
                </div>
            </div>

            <div className="flex justify-center my-10">
                <div>
                    <Map searchValue={searchValue} />
                </div>
            </div>
        </div>
    );
};

export default Coverage;