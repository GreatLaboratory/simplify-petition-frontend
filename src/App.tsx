import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import WordCloudPage from './pages/WordCloudPage';

function App () { 
    return (
        <>
            <Helmet><title>GreatLaboratory</title></Helmet>
            <Route component={HomePage} path='/' exact/>
            <Route component={WordCloudPage} path={['/wordCloud/:category', '/wordCloud']}/>
            <Route component={SummaryPage} path={['/summarization/:category/:petitionID', '/summarization/:category', '/summarization']}/>
        </>
    );
}

export default App;
