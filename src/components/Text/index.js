import React from 'react';

const Text = ({ children }) => {
    return (
        <div style={{ color: 'black', fontSize: '12px', marginRight: '4px'}}>
            {children}
        </div>
    );
}

export default Text;
