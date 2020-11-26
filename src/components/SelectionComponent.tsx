import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SelectionBlock = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-content: center;
    /* float: left; */
`;

const Selection = styled.div`
    border: 1px solid;
    width: 15rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;

     /* 색상 */
    color: white;

    /* 폰트 */
    font-size: 1.9rem;

    /* 기타 */
    border-radius: 100%;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.75s;
`;

type SelectionProps = {
    select: string,
    onClick: (text: string) => void
}

const SelectionComponent: React.FC<SelectionProps>  = ({ select, onClick }) => {
    const link: string = `/${select}`;
    const handleClick = useCallback(() => {
        onClick(select);
    }, []);
    return (
        <SelectionBlock>
            <Link to={link}>
                <Selection onClick={handleClick}>{select}</Selection>
            </Link>
        </SelectionBlock>
    );
};

export default SelectionComponent;
