import {ADD_TODO, DEL_TODO, GET_TODO, SEND_TODO} from './actionTypes';
import {TTodoList} from '../index';


export type TAction = {
    type: string,
    payload?: TTodoList
};

// Actions

// export const addTodo = {
//     type: ADD_TODO,
//     payload: [{
//         userId: 1,
//         id: 1,
//         title: "delectus aut autem",
//         completed: false,
//     }]
// };

export const addTodo = (todo: TTodoList) => {

    // const newArr = [...selectedList, todo]

    return {
        type: ADD_TODO,
        payload: todo
    }

};

export const delTodo = (todo: TTodoList) => {

    return {
        type: DEL_TODO,
        payload: todo
    }

};

export const sendTodo = {type: SEND_TODO};

export const getTodo = (todos:TTodoList[]) => {
    return {
        type: GET_TODO,
        payload: todos

    }
};


