import React from 'react';

function BackgroundImage({ children, imageUrl }) {
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {children}
        </div>
    );
}

export default BackgroundImage;
