/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AuthInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_loginWeb_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface Login_loginWeb {
  __typename: "AuthResponseWeb";
  user: Login_loginWeb_user;
  accessToken: string;
}

export interface Login {
  loginWeb: Login_loginWeb;
}

export interface LoginVariables {
  input: AuthInput;
}
