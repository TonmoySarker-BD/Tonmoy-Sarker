import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <header>
                <h1>My Portfolio</h1>
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