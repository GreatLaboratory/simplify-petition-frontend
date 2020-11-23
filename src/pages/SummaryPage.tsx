import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import CategoryContainer from '../containers/CategoryContainer';
import SummaryContainer from '../containers/SummaryContainer';

type MatchParams = {
    category: string;
    petitionID: string;
}

const SummaryPage: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
    const category: string = match.params.category;
    const petitionID: string = match.params.petitionID;
    return (
        <>
            <Helmet><title>summarization</title></Helmet> 
            <HeaderComponent/>
            <CategoryContainer/>
            <SummaryContainer category={category} petitionID={petitionID}/>
        </>
    );
};

export default SummaryPage;
