import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Links = ({ routes }) => {
    return (
        <div className='mx-3.5'>
            <Link to={routes.link}>{routes.name}</Link>
        </div>
    );
};

export default Links;