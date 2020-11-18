import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderComponent from '../components/HeaderComponent';
import CategoryContainer from '../containers/CategoryContainer';
import WordCloudContainer from '../containers/WordCloudContainer';

const WordCloudPage = () => {
    return (
        <>
            <Helmet><title>wordCloud</title></Helmet>
            <HeaderComponent/>
            <CategoryContainer/>
            <WordCloudContainer/>
        </>
    );
};

export default WordCloudPage;
