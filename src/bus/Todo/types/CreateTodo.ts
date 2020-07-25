/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  __typename: "Todo";
  id: string;
  text: string | null;
  title: string;
  done: boolean;
}

export interface CreateTodo {
  /**
   * test description
   */
  createTodo: CreateTodo_createTodo;
}

export interface CreateTodoVariables {
  input: TodoInput;
}
