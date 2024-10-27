import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Layout from "./components/Layout";
import Home from './pages/Home';
import Login from "./pages/login/Login";
import About from "./pages/About";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default App