import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../components/LoadingComponent';
import OriginalPetitionComponent from '../components/OriginalPetitionComponent';
import SummaryPetitionComponent from '../components/SummaryPetitionComponent';
import TopFiveListComponent from '../components/TopFiveListComponent';
import { RootState } from '../modules';
import { SelectionState } from '../modules/selection';
import { getOriginalPetitionThunk, getSummaryPetitionThunk, getTopFiveListThunk } from '../modules/summary';

type SummaryProps = {
    category: string,
    petitionID: string,
}

const SummaryContainer: React.FC<SummaryProps> = ({ category, petitionID }) => {
    if (!category) { 
        return (
            <h2 style={{textAlign: 'center'}}>분야를 클릭해주세요.</h2>
        );
    }
    
    const selection: SelectionState = useSelector((state: RootState) => state.selection);
    const { currentID } = useSelector((state: RootState) => state.categories);
    const { topFiveList, original, summary } = useSelector((state: RootState) => state.summary);
    const { data, loading, error } = topFiveList; 
    const { data: originalPetition, loading: loading2, error: error2 } = original;
    const { data: summaryPetition, loading: loading3, error: error3 } = summary;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTopFiveListThunk(category));
        if (petitionID) {
            dispatch(getOriginalPetitionThunk(petitionID));
            dispatch(getSummaryPetitionThunk(petitionID));
        }
    }, [dispatch, category, petitionID]);
 
    return (
        <>
            {loading && (<LoadingComponent type='spin' color='#495057' message='실시간 데이터를 분석중입니다. 6~8초의 로딩시간이 걸립니다....'/>)}
            {error && (<div>에러....</div>)}
            {data && <TopFiveListComponent data={data} selection={selection} currentCategoryID={currentID}/>}
            {petitionID && loading2 && (<LoadingComponent type='spin' color='#495057' message='실시간 데이터를 분석중입니다. 6~8초의 로딩시간이 걸립니다....'/>)} 
            {petitionID && error2 && (<div>에러....</div>)} 
            {petitionID && originalPetition && <OriginalPetitionComponent data={originalPetition}/>} 
            {petitionID && loading3 && (<LoadingComponent type='spin' color='#495057' message='실시간 데이터를 분석중입니다. 6~8초의 로딩시간이 걸립니다....'/>)} 
            {petitionID && error3 && (<div>에러....</div>)} 
            {petitionID && summaryPetition && <SummaryPetitionComponent data={summaryPetition}/>} 
        </>
    );
};

export default React.memo(SummaryContainer);
