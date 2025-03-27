import React from 'react';

function Button({ text, onClick }) {
  return (
    <button 
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;