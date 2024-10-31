import { useState } from "react";
import { Button, Card, Container, Form, InputGroup, Spinner } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { register as registerService } from "../../api/authService";
import { Alert } from "@mui/material";

const Register = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isUsernameValid, setIsUsernameValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);

    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    /* Handle email change to check if its valid */
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
        setEmail(email);
    }

    /* Handle username change to check if its valid */
    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
        setIsUsernameValid(usernameRegex.test(username));
        setUsername(username);
    }


    /* Password validations */
    const validPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        setIsPasswordValid(passwordRegex.test(password));
        setPassword(password);
    }

    const isFormValid = isEmailValid && isUsernameValid && isPasswordValid;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (isFormValid) {
            try {
                await registerService(email, username, password);
                navigate("/");
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    }


    return (
        <div className="register-page">
            <Container className="d-flex align-items-center justify-content-center min-vh-100">
                <Card className="shadow-lg p-4 login-card">
                    <Card.Body>
                        <h2 className="text-center mb-4 text-primary">Registro</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email" className='mt-2'>
                                <Form.Label>Correo electrónico</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="email"
                                        placeholder="Ingresa tu Email"
                                        value={email}
                                        onChange={(e) => validateEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <InputGroup.Text>
                                        {isEmailValid === null ? null : isEmailValid ? (
                                            <AiOutlineCheck color="green" />
                                        ) : (
                                            <AiOutlineClose color="red" />
                                        )}
                                    </InputGroup.Text>
                                    {isEmailValid === false && (
                                        <Form.Text className="text-danger">
                                            Por favor, ingresa un correo electrónico válido.
                                        </Form.Text>
                                    )}
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="username" className='mt-2'>
                                <Form.Label>Nombre de usuario</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa tu username"
                                        value={username}
                                        onChange={(e) => validateUsername(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <InputGroup.Text>
                                        {isUsernameValid === null ? null : isUsernameValid ? (
                                            <AiOutlineCheck color="green" />
                                        ) : (
                                            <AiOutlineClose color="red" />
                                        )}
                                    </InputGroup.Text>
                                    {isUsernameValid === false && (
                                        <Form.Text className="text-danger">
                                            El usuario debe tener entre 4 y 15 caracteres.
                                        </Form.Text>
                                    )}
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="password" className='mt-2'>
                                <Form.Label>Contraseña</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="password"
                                        placeholder="Ingresa tu contraseña"
                                        value={password}
                                        onChange={(e) => validPassword(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <InputGroup.Text>
                                        {isPasswordValid === null ? null : isPasswordValid ? (
                                            <AiOutlineCheck color="green" />
                                        ) : (
                                            <AiOutlineClose color="red" />
                                        )}
                                    </InputGroup.Text>
                                    {isPasswordValid === false && (
                                        <Form.Text className="text-danger">
                                            La contraseña debe cumplir los siguientes requisitos:
                                            <ul>
                                                <li>Al menos 8 caracteres</li>
                                                <li>Al menos una letra minúscula</li>
                                                <li>Al menos una letra mayúscula</li>
                                                <li>Al menos un número</li>
                                            </ul>
                                        </Form.Text>
                                    )}
                                </InputGroup>
                            </Form.Group>
                            {error && <Alert variant='outlined' severity='error' className='mt-3' sx={{ bgcolor: 'background.paper' }}>{error}</Alert>}
                            <Button variant="primary" type="submit" className="w-100 mt-4" disabled={!isFormValid || isLoading}>
                                {isLoading ? <Spinner animation="border" size="sm" /> : "Registrarse"}
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <Link to="/" className="text-primary">
                                ¿Ya tienes una cuenta? <b>Inicia sesión</b>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Register