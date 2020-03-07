import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type AuthResponseMobile = {
   __typename?: 'AuthResponseMobile',
  accessToken: Scalars['String'],
  user: User,
  errors?: Maybe<Array<FieldError>>,
  refreshToken: Scalars['String'],
};

export type AuthResponseWeb = {
   __typename?: 'AuthResponseWeb',
  accessToken: Scalars['String'],
  user: User,
  errors?: Maybe<Array<FieldError>>,
};

export type FieldError = {
   __typename?: 'FieldError',
  path: Scalars['String'],
  message: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  registerWeb: UserResponse,
};


export type MutationRegisterWebArgs = {
  input: AuthInput
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  email: Scalars['String'],
  test: Scalars['String'],
  testbig: Scalars['String'],
};

export type UserResponse = {
   __typename?: 'UserResponse',
  user?: Maybe<User>,
  errors?: Maybe<Array<FieldError>>,
};

export type RegisterMutationVariables = {
  input: AuthInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registerWeb: (
    { __typename?: 'UserResponse' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )>, errors: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'path' | 'message'>
    )>> }
  ) }
);


export const RegisterDocument = gql`
    mutation Register($input: AuthInput!) {
  registerWeb(input: $input) {
    user {
      id
      email
    }
    errors {
      path
      message
    }
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;