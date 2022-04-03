import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Phone = ({ phone, handleAddToCart }) => {

    const navigate = useNavigate()
    const showPhoneDetail = () => {
        const path = `/phone/${phone.slug}`
        navigate(path);
    }
    // console.log();
    return (
        <div className=''>
            <div className="py-8 px-8 max-w-sm mx-auto bg-stone-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm: sm:items-center sm:space-y-0 sm:space-x-6 my-4">
                <img className="block mx-auto h-24 lg:mx-0 lg:shrink-0  rounded-full sm:mx-0 sm:shrink-0" src={phone.image} alt="Woman's Face" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p title={phone._name} className="text-lg text-black font-semibold">
                            {phone.phone_name > 15 ? phone.phone_name : phone.phone_name.slice(0, 15) + '...'}
                        </p>

                    </div>
                    <button onClick={() => handleAddToCart(phone)} className="px-4 mr-2 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add to cart</button>


                    <button onClick={showPhoneDetail} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">detailse</button>
                </div>
            </div>
        </div>
    );
};




/* 
*/




// to={'/phone/' + phone.slug}
export default Phone;