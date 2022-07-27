import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { AccountConfigurations } from "./pages/AccountConfigurations";
import { Deposit } from "./pages/Deposit";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Statement } from "./pages/Statement";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/deposit' element={<Deposit/>} />
          <Route path='/accountconfigurations' element={<AccountConfigurations/>} />
          <Route path='/statement' element={<Statement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
