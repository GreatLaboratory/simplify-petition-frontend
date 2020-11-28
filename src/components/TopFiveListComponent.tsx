import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Petition } from '../api';
import { SelectionState } from '../modules/selection';

const PetitionListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const PetitionItemBlock = styled(NavLink)`
    display: flex;
    margin: 0;
    line-height: 2;
    margin-top: 0.5rem;
    white-space: normal;
    cursor: pointer;
    &:hover {
        color: #495057
    }
    &.active {
        div{
            font-weight: 600;
            border-bottom: 2px solid #093a26;
            color: #093a26;
            &:hover {
                color: #050505
            }
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

type TopFiveListProps = {
    data: Petition[],
    selection: SelectionState,
    currentCategoryID: string
}

const TopFiveListComponent: React.FC<TopFiveListProps> = ({ data, selection, currentCategoryID }) => {
    return (
        <PetitionListBlock>
            <h2>TOP5 인기 청원글</h2>
            {data.map((petiton: Petition, index: number) => 
                <PetitionItemBlock 
                    key={petiton.id}
                    to={`/${selection.current}/${currentCategoryID}/${petiton.id}`}
                    activeClassName='active'>
                    <div>
                        {index + 1}. {petiton.title} ({petiton.agreement})
                    </div>
                </PetitionItemBlock>)}
        </PetitionListBlock>
    );
};

export default TopFiveListComponent;
