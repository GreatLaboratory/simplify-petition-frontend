import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryListState, CategoryState } from '../modules/category';
import { SelectionState } from '../modules/selection';

const CategoryBlock = styled.div`
    justify-content: center;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
`;

const CategoryTable = styled.table`
    text-align: center;
    width: 1000px;
    height: 100px;
`;

const CategoryTableData = styled.td`
    border: 1px solid #f7f3f3;
    border-radius: 10px;
`;

export const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057
    }
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #093a26;
        color: #093a26;
        &:hover {
            color: #050505
        }
    }
`;

type CategoriesProps = {
    categories: CategoryListState,
    selection: SelectionState,
    onClick: (currentID: string) => void
}

const CategoryComponent: React.FC<CategoriesProps> = ({ categories, selection, onClick }) => {
    return (
        <CategoryBlock>
            <CategoryTable>
                <tbody>
                    {categories.map((row: CategoryState[], i: number) => 
                        <tr key={i}>
                            {row.map((category: CategoryState) => 
                                <CategoryTableData key={category.id}>
                                    <Category 
                                        key={category.id}
                                        to={`/${selection.current}/${category.id}`}
                                        onClick={useCallback(() => {
                                            onClick(category.id);
                                        }, [])}
                                        activeClassName='active'>
                                        {category.name}
                                    </Category>
                                </CategoryTableData>)}
                        </tr>)}
                </tbody>
                
            </CategoryTable>
        </CategoryBlock>
    );
};

export default CategoryComponent;
