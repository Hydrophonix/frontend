/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserUpdateInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateMe
// ====================================================

export interface UpdateMe_updateMe {
  __typename: "User";
  id: string;
  name: string;
}

export interface UpdateMe {
  updateMe: UpdateMe_updateMe;
}

export interface UpdateMeVariables {
  input: UserUpdateInput;
}
