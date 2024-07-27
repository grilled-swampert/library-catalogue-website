import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import Home from "./pages/home/home";
import ForgotPassword from "./pages/forget_password/forget_password";
import Catalogue from "./pages/catalogue/catalogue";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
