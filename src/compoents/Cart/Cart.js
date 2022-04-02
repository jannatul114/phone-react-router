import React from 'react';

const Cart = ({ cart, handleRemove }) => {

    return (
        <div>
            <div class="py-8 px-8 max-w-sm mx-auto bg-stone-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm: sm:items-center sm:space-y-0 sm:space-x-6 my-4">
                <img class="block mx-auto h-24 lg:mx-0 lg:shrink-0  rounded-full sm:mx-0 sm:shrink-0" src={cart.image} alt="Woman's Face" />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p title={cart.name} class="text-lg text-black font-semibold">
                            {cart.phone_name > 15 ? cart.phone_name : cart.phone_name.slice(0, 15) + '...'}
                        </p>

                    </div>
                    <button onClick={() => handleRemove(cart)} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">remove</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;