import React, { useState } from "react";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { setAuthToken } from "../../Helpers/SetAuthToken";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    console.log(email, password);
    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.emailerror');
        const passwordError = document.querySelector('.passworderror');

        axios({
            method: "post",
            url: 'http://127.0.0.1:8000/api/login',
            headers: { 'Content-Type': 'application/json' },

            withCredentials: false,
            data: {
                email: email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    //get token from response
                    const token = res.data.token
                    const id = res.data.id
                    //set JWT token to local
                    localStorage.setItem("token", token);
                    localStorage.setItem("id", id);
                    //set token to axios common header
                    setAuthToken(token);
                    window.location = '/';
                }
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status === 401) {
                    setError("Combinaison nom d'utilisateur et mot de passe non valide") 
                }else{
                    setError(null)
                }
            });
    };


    return (
        <>
            <Form action="" method='post' className="formulaire" onSubmit={handleLogin}>
                <h4 className="text-center text-light">Se Connecter</h4>

                <br />
                {error && <h3 style={{ color: 'red' }}>{error}</h3>}
                <FloatingLabel
                    controlId="floatingInput"
                    label="adresse Email"
                    className="mb-3 "
                >
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className=" h-100"
                        required
                    />
                </FloatingLabel>
                <div className="email-error"></div>

                <br />

                <FloatingLabel
                    controlId="floatingPassword"
                    label="mot de passe"
                    className="mb-3"
                >
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className=" h-100"
                        required
                    />
                </FloatingLabel>
                <div className="password-error"></div>

                <br />
                

                <button className="btn btn-primary btn-block mt-4" id="submitBtn" onClick={(e) => handleLogin(e)}>Valider</button>
            </Form>
        </>
    )
}

export default LoginForm