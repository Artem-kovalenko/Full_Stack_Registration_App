import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';

import FirstRegisterPage from './components/FirstRegisterPage/firstRegisterPage';
import SecondRegisterPage from './components/SecondRegisterPage/secondRegisterPage';
import Home from './components/Home/home';
import AdminPage from './components/AdminPage/adminPage';
import SuccessRegisterPage from "./components/SuccessRegisterPage/successRegisterPage";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/first_register" component={FirstRegisterPage} />
        <Route exact path="/second_register" component={SecondRegisterPage} />
        <Route exact path="/success_register" component={SuccessRegisterPage} />

        <Route exact path="/admin" component={AdminPage} />
      </div>
    </Router>
  );
}

export default App;
