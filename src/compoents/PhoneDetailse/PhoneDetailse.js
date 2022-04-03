import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PhoneDetailse = () => {
    const { name } = useParams();
    const [phones, setPhones] = useState({});
    useEffect(() => {
        const url = `https://openapi.programming-hero.com/api/phone/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPhones(data))
    }, []);
    console.log(phones?.data?.name);
    return (
        <div>
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                    <div className='flex justify-center py-2'>
                        <img src={phones?.data?.image} alt="" />
                    </div>
                    <div class="p-5">
                        <h1 class="text-2xl font-bold">{phones?.data?.name}</h1>
                        <p class="mt-1 text-gray-500 font-">Lorem ipsum carrots, enhanced undergraduate developer,
                            but they do occaecat time and vitality, Lorem ipsum carrots,
                            enhanced undergraduate developer, but they do occaecat time
                            and vitality</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PhoneDetailse;