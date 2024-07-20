// import logo from './logo.svg';
// import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
