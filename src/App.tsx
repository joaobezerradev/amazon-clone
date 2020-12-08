import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <Router>
    <Header />
    <Home />
    <GlobalStyles />
  </Router>
);

export default App;
