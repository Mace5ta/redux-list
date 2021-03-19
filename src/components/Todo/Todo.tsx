import React from "react";
import ButtonsTodo from '../ButtonsTodo/ButtonsTodo';

type TProps = {
    item: {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
        // key: number
    };
    index: number
};
const Todo = (props: TProps) => {
    const item = props.item;
    const index = props.index;


    return (
        <div className={"Todo"}>
            <div>{item.title}</div>
            <div>
                <ButtonsTodo item={item}/>
                {/*<ButtonsTodo index={index} id={item.id}/>*/}
                {/*<button>Добавить</button>*/}
                {/*<button disabled={true}>Удалить</button>*/}
            </div>
        </div>
    );
};

export default Todo;
