/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AuthInput {
  email: string;
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

//==============================================================
// END Enums and Input Objects
//==============================================================
