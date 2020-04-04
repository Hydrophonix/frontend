// Core
import { ApolloError } from 'apollo-client';

export const getInputType = (name: string, value: string | number) => {
    if (name === 'password') {
        return 'password';
    }

    if (name === 'email') {
        return 'email';
    }

    if (typeof value === 'number') {
        return 'number';
    }

    return 'text';
};

interface ValidationError {
    property: string;
    constraints: typeof Object;
}

// TODO: type better
export const formatInputErrors = (error: ApolloError): any => {
    let inputErrors = {};

    if (error) {
        error.graphQLErrors.forEach(({ extensions }) => {
            if (extensions?.code === 'ARGUMENT_VALIDATION_ERROR') {
                inputErrors = extensions.exception.validationErrors
                    .reduce((acc: Object, validationError: ValidationError) => {
                        return {
                            ...acc,
                            [ validationError.property ]: Object.values(validationError.constraints)[ 0 ],
                        };
                    }, {});
            }
        });
    }

    return inputErrors;
};
