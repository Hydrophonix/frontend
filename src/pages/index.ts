// Core
import React from 'react';

export const Main = React.lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = React.lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ './Login'));
export const Me = React.lazy(() => import(/* webpackChunkName: "Me" */ './Me'));
export const Game = React.lazy(() => import(/* webpackChunkName: "Game" */ './Game'));
export const Todos = React.lazy(() => import(/* webpackChunkName: "Todos" */ './Todos'));

