import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
const Header = () => {
    return (
        <header className='sticky top-0 z-10 py-4 bg-gray-50 min-h-16'>
            <div className='flex flex-wrap justify-between items-center max-w-6xl px-4 mx-auto'>
                <h1 className='text-2xl font-semibold'>
                    <Link to="/">
                        ImageShare
                    </Link>
                </h1>
                <Nav />
            </div>

        </header>
    )
}

export default Header;