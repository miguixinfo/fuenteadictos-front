import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Layout from "./components/Layout";
import Home from './pages/Home';
import Login from "./pages/login/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                </Route>
            </Routes>
        </Router>
    )
}

export default App