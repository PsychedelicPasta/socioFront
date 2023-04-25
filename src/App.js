import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import HomePage from './pages/home';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
