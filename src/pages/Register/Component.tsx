// Core
import React, { FC, useState } from 'react';

// Hooks
import { useRegisterMutation } from '../../generated/graphql';
import { setAccessToken } from '../../tokenStore';

type RegisterProps = {}

const Register: FC<RegisterProps> = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ register ] = useRegisterMutation();

    return (
        <div>
            <div>KEK Register</div>
            <form onSubmit = { async (event) => {
                event.preventDefault();

                const response = await register({
                    variables: {
                        input: { email, password },
                    },
                });
                console.log('<<<TESTLOG>>>: response', response);

                if (response && response.data) {
                    setAccessToken(response.data.registerWeb.accessToken);
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
                    <button type = 'submit'>Registr!1!</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
