import React from 'react';

const Text = ({ children, isTitle }) => {

    // non-Functional component, deals  with text style && checks if title is true //
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
