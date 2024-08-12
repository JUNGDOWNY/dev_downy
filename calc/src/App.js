import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calc from './calc';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calc />} />
    </Routes>
  );
}

export default App;
