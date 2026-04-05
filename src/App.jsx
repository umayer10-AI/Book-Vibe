import React from 'react';
import A1 from './A1';
import Context from './Context/Context';

const App = () => {
  return (
    <div>
      <Context>
          <A1></A1>
      </Context>
    </div>
  );
};

export default App;