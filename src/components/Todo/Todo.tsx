import React from "react";
import {TTodoList} from '../../store';
import ButtonsTodo from '../ButtonsTodo/ButtonsTodo';

type TProps = {
    item: {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
        // key: number
    };
};
const Todo = (props: TProps) => {
    const item = props.item;


    return (
        <div className={"Todo"}>
            <div>{item.title}</div>
            <div>
                <ButtonsTodo id={item.id}/>
                {/*<button>Добавить</button>*/}
                {/*<button disabled={true}>Удалить</button>*/}
            </div>
        </div>
    );
};

export default Todo;
