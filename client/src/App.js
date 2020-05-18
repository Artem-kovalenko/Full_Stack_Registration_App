import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';

import FirstRegisterPage from './components/FirstRegister/firstRegisterPage';
import SecondRegisterPage from './components/SecondRegister/secondRegisterPage';
import Home from './components/Home/home';
import AdminLogin from './components/AdminLogin/adminLogin';
import SuccessRegisterPage from "./components/SuccessRegister/successRegisterPage";
import SuperAdminPage from "./components/SuperAdmin/superAdminPage";
import UsersGetData from "./components/Users/usersGetData";
import ParticipantsPage from "./components/Participants/participantsPage";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/first_register" component={FirstRegisterPage} />
        <Route exact path="/second_register" component={SecondRegisterPage} />
        <Route exact path="/success_register" component={SuccessRegisterPage} />

        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/superAdmin_page" component={SuperAdminPage} />
        <Route exact path="/users_page" component={UsersGetData} />
        <Route exact path="/participants_page" component={ParticipantsPage} />
      </div>
    </Router>
  );
}

export default App;
