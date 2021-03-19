import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TState, TTodoList} from '../../store';
import Todo from '../Todo/Todo';
import {getTodo, sendTodo} from '../../store/todo/actions';


const TodoList = () => {
    const dispatch = useDispatch()

    const selectedList = useSelector<TState, TTodoList[]>((state => state.selectedList));

    const todoList = useSelector<TState, TTodoList[]>((state => (
        console.log(state),
            state.todoList
    )));


    // const todoList = useSelector<TState, TTodoList[]>((state => (
    //     console.log(state),
    //         state.todoList
    // )));

    // @ts-ignore
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
            .then(response => response.json())
            .then(todos => {
                    console.log('ТыДыСы', todos);
                    dispatch(getTodo(todos))
                }
            );
    }, [])


    const handleSendTodo = () => {
        console.log('Senddddddddddd', selectedList)
        dispatch(sendTodo);
    }

    if (todoList.length === 0) {
        return <h1>Загрузка данных...</h1>
    }

    return (
        <>
            <div>
                {todoList.map((item, index) => (
                    <Todo item={item} key={item.id} index={index}/>
                ))}
            </div>
            <button onClick={() => handleSendTodo()}>Отправить</button>
        </>
    )
}

export default TodoList;
