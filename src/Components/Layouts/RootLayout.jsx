import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default RootLayout;