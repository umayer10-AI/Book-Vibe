import React from 'react';
import A1 from './A1';
import Context from './Context/Context';
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div>
      <Context>
          <A1></A1>
      </Context>
      <ToastContainer />
    </div>
  );
};

export default App;