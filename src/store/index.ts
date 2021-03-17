import {createStore} from 'redux';
import {todoReducer} from './todo/todoReducer';
// import { reducer } from "./counter/reducer";

// export const store = createStore(reducer);
// @ts-ignore
export const store = createStore(todoReducer);

export type TState = ReturnType<typeof store.getState>;
export type TTodoList = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}
