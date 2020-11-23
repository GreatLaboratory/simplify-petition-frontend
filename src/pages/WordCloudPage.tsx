import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import CategoryContainer from '../containers/CategoryContainer';
import WordCloudContainer from '../containers/WordCloudContainer';

type MatchParams = {
    category: string;
}

const WordCloudPage: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
    const category: string = match.params.category;
    return (
        <>
            <Helmet><title>wordCloud</title></Helmet>
            <HeaderComponent/>
            <CategoryContainer/>
            <WordCloudContainer category={category}/>
        </>
    );
};

export default WordCloudPage;
