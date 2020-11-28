import { getWordCloudImage } from '../api';

const GET_WordCloud_Image = 'wordCloud/GET_WordCloud_Image' as const;
const GET_WordCloud_Image_SUCCESS = 'wordCloud/GET_WordCloud_Image_SUCCESS' as const;
const GET_WordCloud_Image_ERROR = 'wordCloud/GET_WordCloud_Image_ERROR' as const;

const getWordCloudImageAction = () => ({
    type: GET_WordCloud_Image    
});
const getWordCloudImageSuccessAction = (data: string) => ({
    type: GET_WordCloud_Image_SUCCESS,
    payload: data
});
const getWordCloudImageErrorAction = (error: Error) => ({
    type: GET_WordCloud_Image_ERROR,
    payload: error
});

type WordCloudState = {
    loading: boolean,
    data: string,
    error: Error | null,
}

const initialState: WordCloudState = {
    loading: false,
    data: '',
    error: null
};

type WordCloudAction =
    | ReturnType<typeof getWordCloudImageAction>
    | ReturnType<typeof getWordCloudImageSuccessAction>
    | ReturnType<typeof getWordCloudImageErrorAction>

export const getWordCloudImageThunk = (category: string) => async (dispatch: any) => {
    dispatch({ type: GET_WordCloud_Image });
    try {
        const result = await getWordCloudImage(category);
        dispatch({ type: GET_WordCloud_Image_SUCCESS, payload: result });
    } catch (err) {
        dispatch({ type: GET_WordCloud_Image_ERROR, payload: err });
        throw err;
    }
};

const reducer = (state: WordCloudState = initialState, action: WordCloudAction) => {
    switch (action.type) {
    case GET_WordCloud_Image:
        return {
            loading: true,
            data: undefined,
            error: null,
        };
    case GET_WordCloud_Image_SUCCESS:
        return {
            loading: false,
            data: action.payload,
            error: null,
        };
    case GET_WordCloud_Image_ERROR:
        return {
            loading: false,
            data: undefined,
            error: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;
