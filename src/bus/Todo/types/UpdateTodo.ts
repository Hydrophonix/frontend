/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoUpdateInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateTodo
// ====================================================

export interface UpdateTodo_updateTodo {
  __typename: "Todo";
  id: string;
  done: boolean;
  text: string | null;
  title: string;
}

export interface UpdateTodo {
  updateTodo: UpdateTodo_updateTodo;
}

export interface UpdateTodoVariables {
  input: TodoUpdateInput;
  id: string;
}
