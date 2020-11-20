import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadBlock = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

const Head = styled.div`
    /* padding-bottom: 3rem; */
    /* margin-bottom: 3rem; */
    text-align: center;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const HeaderComponent = () => {
    return (
        <HeadBlock>
            <Head>
                <h1>
                    <Link to='/'>GreatLaboratory</Link>
                </h1>
            </Head>
        </HeadBlock>
    );
};

export default HeaderComponent;
