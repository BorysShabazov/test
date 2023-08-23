import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState('');

  function inputText(e) {
    setState(e.target.value);
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <input type="text" onChange={inputText} />
      <p>{state}</p>
    </div>
  );
};
