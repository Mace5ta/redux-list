import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import {TState, TTodoList} from '../../store';

const Counter = () => {
    const title = useSelector<TState, string>((state) => state.title);

    const cnt = useSelector<TState, number>((state => state.selectedList.length));

    return (
        <div>
            <div>{title}</div>
            <div>{cnt}</div>
        </div>
    );
};

export default Counter;
