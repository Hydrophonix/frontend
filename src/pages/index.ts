// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Login = lazy(() => import(/* webpackChunkName: "Login" */ './Login'));
export const Me = lazy(() => import(/* webpackChunkName: "Me" */ './Me'));
export const Game = lazy(() => import(/* webpackChunkName: "Game" */ './Game'));
export const Todos = lazy(() => import(/* webpackChunkName: "Todos" */ './Todos'));
