import React from 'react';
import box from './Box';

function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default box(Header);