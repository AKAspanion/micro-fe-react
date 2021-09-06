import React from 'react';

import { Button } from 'components/src/Button.jsx';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'pink',
      }}
    >
      <h1>Module 1</h1>
      <Button label="Module 1 Button" />
    </div>
  );
};

export default App;
