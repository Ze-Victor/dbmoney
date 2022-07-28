import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AccountConfigurations } from "./pages/AccountConfigurations";
import { Register } from "./pages/Register";
import { Deposit } from "./pages/Deposit";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Statement } from "./pages/Statement";
import { AccountProvider } from "./context/accountContext";
import { Pix } from "./pages/Pix";

function App() {
  return (
    <AccountProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/pix" element={<Pix />} />
          <Route
            path="/accountconfigurations"
            element={<AccountConfigurations />}
          />
          <Route path="/statement" element={<Statement />} />
        </Routes>
      </BrowserRouter>
    </AccountProvider>
  );
}

export default App;
