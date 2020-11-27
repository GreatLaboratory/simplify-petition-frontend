import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryComponent from '../components/CategoryComponent';
import { RootState } from '../modules';
import { changeCategoryID, getCategory } from '../modules/category';
import { SelectionState } from '../modules/selection';

const CategoryContainer: React.FC = () => {
    const { categoryList } = useSelector((state: RootState) => state.categories);
    const selection: SelectionState = useSelector((state: RootState) => state.selection);
    const dispatch = useDispatch();
    const onClick = (text: string) => {
        dispatch(changeCategoryID(text));
    };
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);
    return (
        <CategoryComponent categories={categoryList} selection={selection} onClick={onClick}/>
    );
};

export default withRouter(CategoryContainer);
