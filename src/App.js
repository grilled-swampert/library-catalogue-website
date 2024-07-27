import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import Home from "./pages/home/home";
import ForgotPassword from "./pages/forget_password/forget_password";
import Catalogue from "./pages/catalogue/catalogue";
import { BrowserRouter as BrowerRoutes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowerRoutes>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/home" component={Home} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/catalogue" component={Catalogue} />
      </BrowerRoutes>
    </div>
  );
}

export default App;
