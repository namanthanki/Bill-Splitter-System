import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Dashboard from "./views/Dashboard.jsx";
import CreateGroup from "./views/CreateGroup.jsx";
import LoginUser from "./views/LoginUser";
import RegisterUser from "./views/RegisterUser";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/dashboard/group/create" exact element={<CreateGroup />}></Route>
          <Route path="/user/register" exact element={<RegisterUser />}></Route>
          <Route path="/user/login" exact element={<LoginUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
