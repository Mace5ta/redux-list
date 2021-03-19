// initialStateCounter
import {TAction} from '../todo/actions';
import {ADD_TODO, DEL_TODO, GET_TODO, SEND_TODO} from './actionTypes';
import {TTodoList} from '../index';

const initialState = {
    todoList: [],
    selectedList: [],
    title: 'Число элементов в новом массиве:',
};

export const todoReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, selectedList: [...state.selectedList, action.payload]};
        case DEL_TODO:
            return {...state, selectedList: state.selectedList.filter(selTodo => (selTodo as TTodoList).id !== (action.payload as TTodoList).id)};
        case SEND_TODO:
            return {...state, selectedList: []};
        case GET_TODO:
            return {...state, todoList: action.payload};
        default:
            return state;
    }
};
