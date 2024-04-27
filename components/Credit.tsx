import React from 'react';
import Image from 'next/image';

const Credit = () => {
    return (
        <a href="https://www.linkedin.com/in/mohamed-taha-sta/" target="_blank" rel="noopener noreferrer">
            <div className={"flex flex-row justify-center"}>
                <h2>Made by </h2>
                <p className={"font-extrabold underline ms-2 text-yellow-600"}> Taha</p>
            </div>
        </a>

    );
};

export default Credit;