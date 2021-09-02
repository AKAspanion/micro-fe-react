import React, { Suspense } from 'react';
const Module1 = React.lazy(() => import('module1/App'));
const Module2 = React.lazy(() => import('module2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Main container</h1>

        <Suspense fallback={'loading...'}>
          <Module1 />
        </Suspense>
        <Suspense fallback={'loading...'}>
          <Module2 />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
