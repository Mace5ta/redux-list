import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store, TState, TTodoList} from '../../store';
import Todo from '../Todo/Todo';
import {addTodo, sendTodo} from '../../store/todo/actions';


const TodoList = () => {
    const dispatch = useDispatch()

    const todoList = useSelector<TState, TTodoList[]>((state => (
        console.log(state),
            state.todoList
    )));

    const handleSendTodo = () => {
        dispatch(sendTodo);
        console.log('Senddddddddddd')
    }


    return (
        <>
            <div>
                {todoList.map((item) => (
                    <Todo item={item} key={item.id}/>
                ))}
            </div>
            <button onClick={() => handleSendTodo()}>Отправить</button>
        </>
    )
}

export default TodoList;
