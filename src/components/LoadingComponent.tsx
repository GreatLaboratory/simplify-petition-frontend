import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 15rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

type LoadingProps = {
    type: 'blank' | 'balls' | 'bars' | 'bubbles' | 'cubes' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes' | undefined,
    color: string,
    message: string,
}

const LoadingComponent: React.FC<LoadingProps> = ({ type, color, message }) => {
    return (
        <LoadingBlock className="contentWrap"> 
            <LoadingBlock style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}> 
                <h2>{message}</h2> 
                <h2>창을 닫지 말아주세요.</h2> 
                <ReactLoading type={type} color={color} height={'30%'} width={'30%'} /> 
            </LoadingBlock> 
        </LoadingBlock>
    );
};

export default LoadingComponent;
