/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AuthInput {
  name: string;
  password: string;
}

export interface TodoInput {
  title: string;
  text?: string | null;
}

export interface TodoUpdateInput {
  title?: string | null;
  text?: string | null;
  done?: boolean | null;
}

export interface UserUpdateInput {
  phone?: string | null;
  name?: string | null;
  email?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
