// Core
import React, { FC, useState } from 'react';

// Components

// Hooks
import { useRegisterMutation } from '../../generated/graphql';

// Styles
// import S from './styles';

// Instruments

type RegisterProps = {}

const Register: FC<RegisterProps> = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ register ] = useRegisterMutation();

    return (
        <div>
            <div>KEK Register</div>
            <form onSubmit={async e => {
                e.preventDefault();
                console.log('form submit');
                console.log('email', email);
                console.log('password', password);
                const response = await register({
                    variables: {
                        input: { email, password }
                    }
                })
                console.log('<<<TESTLOG>>>: response', response);

            }}>
                <div>
                    <input value={email} placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Registr!1!</button>
                </div>
            </form>
        </div>
    );
};
// Home

export default Register;
