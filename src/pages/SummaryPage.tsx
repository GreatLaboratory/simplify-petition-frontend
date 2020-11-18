import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderComponent from '../components/HeaderComponent';
import CategoryContainer from '../containers/CategoryContainer';
import SummaryContainer from '../containers/SummaryContainer';

const SummaryPage = () => {
    return (
        <>
            <Helmet><title>summary</title></Helmet>
            <HeaderComponent/>
            <CategoryContainer/>
            <SummaryContainer/>
        </>
    );
};

export default SummaryPage;
