import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "@fontsource/jost";
import "@fontsource/jost/700.css";

import {
  LandingPage,
  ItemDetails,
  Cart,
  Login,
  SignUp,
  ForgotPassword,
} from "./components";
import Courses from "./pages/Courses";
function App() {
  return (
    <div className="h-[100vh]" style={{ fontFamily: "jost, sans-serif" }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
