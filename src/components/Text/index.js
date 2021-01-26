import React from 'react';

const Text = ({ children, isTitle }) => {
    return (
        <div style={{
            color: 'black',
            fontSize: isTitle ? '20px' : '12px',
            marginRight: '4px',
            fontWeight: isTitle ? 'bold' : 'normal'
        }}>
            {children}
        </div>
    );
}

export default Text;
