import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Links = ({ routes }) => {
    return (
        <div className='mx-3.5'>
            <CustomLink to={routes.link}>{routes.name}</CustomLink>
        </div>
    );
};

export default Links;