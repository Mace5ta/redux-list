import {ADD_TODO, DEL_TODO, SEND_TODO} from './actionTypes';
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

export const addTodo = (todo: TTodoList, selectedList: TTodoList[]) => {

    const newArr = [...selectedList, todo]

    return {
        type: ADD_TODO,
        payload: newArr
    }

};

export const delTodo = (todo: TTodoList, selectedList: TTodoList[]) => {

    const newArr = selectedList.filter(selTodo => selTodo.id !== todo.id)

    return {
        type: DEL_TODO,
        payload: newArr
    }

};

export const sendTodo = {type: SEND_TODO};
