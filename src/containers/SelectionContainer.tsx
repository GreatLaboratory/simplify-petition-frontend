import React from 'react';
import { useDispatch } from 'react-redux';
import SelectionComponent from '../components/SelectionComponent';
import { changeSelction } from '../modules/selection';

const SelectionContainer = () => {
    const dispatch = useDispatch();
    const onClick = (text: string) => {
        dispatch(changeSelction(text));
    };
    return (
        <div>
            <SelectionComponent select='WordCloud' onClick={onClick}/>
            <SelectionComponent select='Summarization' onClick={onClick}/>
        </div>
    );
};

export default SelectionContainer;
