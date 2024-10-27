import { useState } from "react";

const Register = () => {

    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordValid, setisPasswordValid] = useState(null);

    /* Handle email change to check if its valid */
    const validEmail = (email) => {
        setEmail(email);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
    }

    /* Handle email change returning a red text if field is not correct */
    const validPassword = (password) => {
        // Password must have at least 8 characters
        const passwordRegex = /.{8,}/;
        setisPasswordValid(passwordRegex.test(password));
    }

    /*
    <InputGroup.Text>
        {isEmailValid === null ? null : isEmailValid ? (
            <AiOutlineCheck color="green" />
        ) : (
            <AiOutlineClose color="red" />
        )}
    </InputGroup.Text>
    */

    /*
    {isEmailValid === false && (
        <Form.Text className="text-danger">
            Por favor, ingresa un correo electrónico válido.
        </Form.Text>
    )}
    */

    /*
    <InputGroup.Text>
        {isPasswordValid === null ? null : isPasswordValid ? (
            <AiOutlineCheck color="green" />
        ) : (
            <AiOutlineClose color="red" />
        )}
    </InputGroup.Text>
    */

    /*
    {isPasswordValid === false && (
                                    <Form.Text className="text-danger">
                                        La contraseña debe tener al menos 8 caracteres.
                                    </Form.Text>
                                )}
    */

    return (
        <div>Register</div>
    )
}

export default Register