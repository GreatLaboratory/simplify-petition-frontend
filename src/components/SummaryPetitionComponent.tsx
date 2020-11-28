import React from 'react';
import styled from 'styled-components';
import { QnA } from '../api';

const SummaryPetitionBlock = styled.div`
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

type SummaryPetitionProps = {
    data: QnA
}

const SummaryPetitionComponent: React.FC<SummaryPetitionProps> = ({ data }) => {
    return (
        <SummaryPetitionBlock>
            <h2>Summarized Question</h2>
            <p>{data.question}</p>
            <h2>Summarized Answer</h2>
            <p>{data.answer}</p>
        </SummaryPetitionBlock>
    );
};

export default SummaryPetitionComponent;
