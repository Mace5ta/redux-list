import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, delTodo} from '../../store/todo/actions';
import {TState, TTodoList} from '../../store';

// @ts-ignore
const ButtonsTodo = ({item}) => {

    const dispatch = useDispatch()

    const selectedList = useSelector<TState, TTodoList[]>((state => state.selectedList));

    const handleAddTodo = () => {
        dispatch(addTodo(item));
        console.log('Adddddd')
    };

    const handleDelTodo = () => {
        dispatch(delTodo(item));
        console.log('Dellllll')
    };

    const isDisabledButton = () => {
        if (selectedList.find((selTodo) => selTodo.id === item.id)) {
            return true
        }
        return false
    } //


    return (
        <>
            <button onClick={handleAddTodo} disabled={isDisabledButton()}>Добавить</button>
            <button onClick={handleDelTodo} disabled={!isDisabledButton()}>Удалить</button>
        </>
    )
}

export default ButtonsTodo
