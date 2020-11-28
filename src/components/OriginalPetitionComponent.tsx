import React from 'react';
import styled from 'styled-components';
import { QnA } from '../api';

const OriginalPetitionBlock = styled.div`
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

type OriginalPetitionProps = {
    data: QnA
}

const OriginalPetitionComponent: React.FC<OriginalPetitionProps> = ({ data }) => {
    return (
        <OriginalPetitionBlock>
            <h2>Original Question</h2>
            <p>{data.question}</p>
            <h2>Original Answer</h2>
            <p>{data.answer}</p>
        </OriginalPetitionBlock>
    );
};

export default OriginalPetitionComponent;
