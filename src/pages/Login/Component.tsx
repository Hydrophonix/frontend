// Core
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useLoginMutation } from '../../generated/graphql';

// Instruments
import { setAccessToken } from '../../tokenStore';

type LoginProps = {}

const Login: FC<LoginProps> = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ login ] = useLoginMutation();

    return (
        <div>
            <div>KEK LOGIN</div>
            <div><Link to = '/home'>Home</Link></div>
            <div><Link to = '/register'>Register</Link></div>
            <div><Link to = '/login'>Login</Link></div>
            <div><Link to = '/me'>Me</Link></div>
            <form onSubmit = { async (event) => {
                event.preventDefault();
                console.log('form submit');
                console.log('email', email);
                console.log('password', password);
                const response = await login({
                    variables: {
                        input: { email, password },
                    },
                });
                console.log('<<<TESTLOG>>>: response', response);

                if (response && response.data) {
                    setAccessToken(response.data.loginWeb.accessToken);
                }
            } }>
                <div>
                    <input
                        placeholder = 'enter email'
                        value = { email }
                        onChange = { (event) => setEmail(event.target.value) }
                    />
                </div>
                <div>
                    <input
                        placeholder = 'enter password'
                        value = { password }
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                </div>
                <div>
                    <button type = 'submit'>Login!1!</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
