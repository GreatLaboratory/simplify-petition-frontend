import React from 'react';
import styled from 'styled-components';

const ImageBlock = styled.div`
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
`;
const Image = styled.img`
    width: 700px;
    height: 700px;
`;

type WordCloudProps = {
    data: string
}

const WordCloudComponent: React.FC<WordCloudProps> = ({ data }) => {
    return (
        <ImageBlock>
            <Image src={data} alt="" /> 
        </ImageBlock>
    );
};

export default WordCloudComponent;
