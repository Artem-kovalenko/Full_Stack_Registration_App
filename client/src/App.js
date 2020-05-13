import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FirstRegisterPage from './components/firstRegisterPage';
import SecondRegisterPage from './components/secondRegisterPage';
import Home from './components/home';
import AdminPage from './components/adminPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/first_register" component={FirstRegisterPage} />
        <Route exact path="/second_register" component={SecondRegisterPage} />

        <Route exact path="/admin" component={AdminPage} />
      </div>
    </Router>
  );
}

export default App;
