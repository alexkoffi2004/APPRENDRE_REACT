import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';

// import '../'

const Logo = () => {
    return (
        <> 
            <div className='logo'>
                <Link to={"/"} className='logo_name'>
                    <h3> Portfolio </h3>
                </Link>
            </div>
        </>
    );
};
export default Logo