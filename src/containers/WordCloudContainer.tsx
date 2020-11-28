import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../components/LoadingComponent';
import WordCloudComponent from '../components/WordCloudComponent';
import { RootState } from '../modules';
import { getWordCloudImageThunk } from '../modules/wordCloud';

type WordCloudProps = {
    category: string
}

const WordCloudContainer: React.FC<WordCloudProps> = ({ category }) => {
    if (!category) {
        return (
            <h2 style={{textAlign: 'center'}}>분야를 클릭해주세요.</h2>
        );
    }
    
    const { data, loading, error } = useSelector((state: RootState) => state.wordCloud);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWordCloudImageThunk(category));
    }, [dispatch, category]);
    return (
        <>
            {loading && (<LoadingComponent type='spin' color='#495057' message='실시간 데이터를 분석중입니다. 6~8초의 로딩시간이 걸립니다....'/>)}
            {error && (<div>에러....</div>)}
            {data && <WordCloudComponent data={data}/>}
        </>
    );
    
};

export default React.memo(WordCloudContainer);
