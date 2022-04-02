import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhoneDetailse = () => {
    const { name } = useParams;
    const { phones, setPhones } = useState({});
    useEffect(() => {
        const url = `https://openapi.programming-hero.com/api/phone/${name}`
        console.log(url);
    }, [])
    return (
        <div>
            <h1>detailse</h1>
        </div>
    );
};

export default PhoneDetailse;