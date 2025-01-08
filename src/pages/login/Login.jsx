import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginService } from '../../api/authService';
import { AuthContext } from '../../context/AuthContext';
import { Container, Card, Spinner, Button, Form, InputGroup } from 'react-bootstrap';
import { Alert } from '@mui/material';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            //const data = await loginService(username, password); // Uncomment this line to enable login
            //login(data.access_token); // Uncomment this line to enable login
            navigate("/home");
        } catch (error) {
            setError(error.message);
            setUsername("");
            setPassword("");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="login-page">
            <Container className="d-flex align-items-center justify-content-center min-vh-100">
                <Card className="shadow-lg p-4 login-card">
                    <Card.Body>
                        <h2 className="text-center mb-4 text-primary">Iniciar Sesión</h2>
                        <Form onSubmit={onHandleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa tu usuario"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="password" className='mt-2'>
                                <Form.Label>Contraseña</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="password"
                                        placeholder="Ingresa tu contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </InputGroup>
                            </Form.Group>
                            {error && <Alert variant='outlined' severity='error' className='mt-3' sx={{ bgcolor: 'background.paper' }}>{error}</Alert>}
                            <Button variant="primary" type="submit" className="w-100 mt-4" disabled={isLoading}>
                                {isLoading ? <Spinner animation="border" size="sm" /> : "Entrar"}
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <Link to="/register" className="text-primary">
                                ¿No tienes una cuenta? <b>Regístrate</b>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Login;