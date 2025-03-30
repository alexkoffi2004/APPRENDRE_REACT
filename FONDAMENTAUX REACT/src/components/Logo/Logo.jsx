import React from 'react';
import { useState } from 'react';
// import '../'

const Logo = () => {
    const [name, setName] = useState('FACEBOOK');
    return (
        <> 
            <div className='logo'>
                <span>{name}</span>
                <button onClick={() => setName('GOOGLE')}>Change Logo</button>
            </div>
        </>
    );
};

export default Logo