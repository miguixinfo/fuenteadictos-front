import { useState } from "react";
import { Alert, Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { register as registerService } from "../../api/authService";

const Register = () => {

    // TODO implementar un servicio de verificación de email

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isUsernameValid, setIsUsernameValid] = useState(null);
    const [isPasswordValid, setisPasswordValid] = useState(null);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    /* Handle email change to check if its valid */
    const validEmail = (email) => {
        setEmail(email);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
    }

    /* Handle username change to check if its valid */
    const validUsername = (username) => {
        setUsername(username);
        // Username must have at least 4 characters and 15 characters max and no spaces
        const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
        setIsUsernameValid(usernameRegex.test(username));
    }


    /* Password validations */
    const validPassword = (password) => {
        setPassword(password);
        // Password must have at least 8 characters, at least one number, one uppercase letter, one lowercase letter and one special character
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        setisPasswordValid(passwordRegex.test(password));
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        if (isEmailValid && isUsernameValid && isPasswordValid) {
            try {
                await registerService(email, username, password);
                navigate("/");
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setError("Error al registrar el usuario, revisa los campos cumplimentados.");
            }
        }
    }


    return (
        <div className="register-page">
            <Container className="d-flex align-items-center justify-content-center min-vh-100">
                <Card className="shadow-lg p-4 login-card">
                    <Card.Body>
                        <h2 className="text-center mb-4 text-primary">Registro</h2>
                        <Form onSubmit={onHandleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa tu Email"
                                        value={email}
                                        onChange={(e) => validEmail(e.target.value)}
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
                                        onChange={(e) => validUsername(e.target.value)}
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
                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                            <Button variant="primary" type="submit" className="w-100 mt-4">
                                Registrarme
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