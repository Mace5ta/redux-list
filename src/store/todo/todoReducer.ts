// initialStateCounter
import {TAction} from '../todo/actions';
import {ADD_TODO, DEL_TODO, SEND_TODO} from './actionTypes';

const initialState = {
    todoList: [
        {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        },
        {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false,
        },
        {
            userId: 1,
            id: 3,
            title: 'fugiat veniam minus',
            completed: false,
        },
        {
            userId: 1,
            id: 4,
            title: 'et porro tempora',
            completed: true,
        },
        {
            userId: 1,
            id: 5,
            title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
            completed: false,
        },
        {
            userId: 1,
            id: 6,
            title: 'qui ullam ratione quibusdam voluptatem quia omnis',
            completed: false,
        },
    ],
    selectedList: [],
    counter: 0,
    title: 'Число элементов в новом массиве:',
};

export const todoReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ADD_TODO:
            // @ts-ignore
            return {...state, selectedList: action.payload};
        case DEL_TODO:
            return {...state, selectedList: action.payload};
        case SEND_TODO:
            return {...state, selectedList: []};
        default:
            return state;
    }
};
