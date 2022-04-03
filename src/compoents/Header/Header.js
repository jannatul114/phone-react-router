import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Links from '../Links/Links';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/' },
        { id: 4, name: 'Reviews', link: '/reviews' },
        { id: 6, name: 'Login', link: '/login' },
    ]
    return (


        <nav className='bg-blue-500 py-3 font-semibold text-white'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <div className={`md:flex justify-center absolute md:static duration-500 ease-in bg-blue-500 w-full ${open ? 'top-8' : 'top-[-150px]'} sm:bg-blue-500`} >
                {
                    routes.map(route => <Links routes={route} key={routes.id}></Links>)
                }
            </div>
        </nav>
    );
};

export default Header;