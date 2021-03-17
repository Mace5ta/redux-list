import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, delTodo} from '../../store/todo/actions';
import {TState, TTodoList} from '../../store';

// @ts-ignore
const ButtonsTodo = ({id}) => {

    const dispatch = useDispatch()


    const todoList = useSelector<TState, TTodoList[]>((state => state.todoList));
    const selectedList = useSelector<TState, TTodoList[]>((state => state.selectedList));

    const handleAddTodo = (id: number) => {
        dispatch(addTodo(todoList[id - 1], selectedList));
        console.log('Adddddd')
    };

    const handleDelTodo = (id: number) => {
        dispatch(delTodo(todoList[id - 1], selectedList));
        console.log('Dellllll')
    };

    const isDisabledButton = (id: number) => {
        if (selectedList.includes(todoList[id - 1])) {
            return true
        }
        return false
    }


    return (
        <>
            <button onClick={() => handleAddTodo(id)} disabled={isDisabledButton(id)}>Добавить</button>
            <button onClick={() => handleDelTodo(id)} disabled={!isDisabledButton(id)}>Удалить</button>
        </>
    )
}

export default ButtonsTodo
