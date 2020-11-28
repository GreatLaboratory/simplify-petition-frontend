import { getTopFiveList, Petition, QnA, getOrginalPetition, getSummaryPetition } from '../api';

const GET_TOPFIVE_LIST = 'summary/GET_TOPFIVE_LIST' as const;
const GET_TOPFIVE_LIST_SUCCESS = 'summary/GET_TOPFIVE_LIST_SUCCESS' as const;
const GET_TOPFIVE_LIST_ERROR = 'summary/GET_TOPFIVE_LIST_ERROR' as const;

const GET_ORIGINAL_PETITION = 'summary/GET_ORIGINAL_PETITION' as const;
const GET_ORIGINAL_PETITION_SUCCESS = 'summary/GET_ORIGINAL_PETITION_SUCCESS' as const;
const GET_ORIGINAL_PETITION_ERROR = 'summary/GET_ORIGINAL_PETITION_ERROR' as const;

const GET_SUMMARY_PETITION = 'summary/GET_SUMMARY_PETITION' as const;
const GET_SUMMARY_PETITION_SUCCESS = 'summary/GET_SUMMARY_PETITION_SUCCESS' as const;
const GET_SUMMARY_PETITION_ERROR = 'summary/GET_SUMMARY_PETITION_ERROR' as const;

const getSummaryPetitionAction = () => ({
    type: GET_SUMMARY_PETITION    
});
const getSummaryPetitionSuccessAction = (data: QnA) => ({
    type: GET_SUMMARY_PETITION_SUCCESS,
    payload: data
});
const getSummaryPetitionErrorAction = (error: Error) => ({
    type: GET_SUMMARY_PETITION_ERROR,
    payload: error
});

const getOriginalPetitionAction = () => ({
    type: GET_ORIGINAL_PETITION    
});
const getOriginalPetitionSuccessAction = (data: QnA) => ({
    type: GET_ORIGINAL_PETITION_SUCCESS,
    payload: data
});
const getOriginalPetitionErrorAction = (error: Error) => ({
    type: GET_ORIGINAL_PETITION_ERROR,
    payload: error
});

const getTopFiveListAction = () => ({
    type: GET_TOPFIVE_LIST    
});
const getTopFiveListSuccessAction = (data: Petition[]) => ({
    type: GET_TOPFIVE_LIST_SUCCESS,
    payload: data
});
const getTopFiveListErrorAction = (error: Error) => ({
    type: GET_TOPFIVE_LIST_ERROR,
    payload: error
});
 
type SummaryState = {
    topFiveList: {
        loading: boolean,
        data: Petition[],
        error: Error | null,
    },
    original: {
        loading: boolean,
        data: QnA | null,
        error: Error | null,
    },
    summary: {
        loading: boolean,
        data: QnA | null,
        error: Error | null,
    },
}

const initialState: SummaryState = {
    topFiveList: {
        loading: false,
        data: [],
        error: null,
    },
    original: {
        loading: false,
        data: null,
        error: null,
    },
    summary: {
        loading: false,
        data: null,
        error: null,
    },
};

type SummaryAction =
    | ReturnType<typeof getTopFiveListAction>
    | ReturnType<typeof getTopFiveListSuccessAction>
    | ReturnType<typeof getTopFiveListErrorAction>
    | ReturnType<typeof getSummaryPetitionAction>
    | ReturnType<typeof getSummaryPetitionSuccessAction>
    | ReturnType<typeof getSummaryPetitionErrorAction>
    | ReturnType<typeof getOriginalPetitionAction>
    | ReturnType<typeof getOriginalPetitionSuccessAction>
    | ReturnType<typeof getOriginalPetitionErrorAction>

export const getTopFiveListThunk = (category: string) => async (dispatch: any) => {
    dispatch({ type: GET_TOPFIVE_LIST });
    try {
        const result = await getTopFiveList(category);
        dispatch({ type: GET_TOPFIVE_LIST_SUCCESS, payload: result });
    } catch (err) {
        dispatch({ type: GET_TOPFIVE_LIST_ERROR, payload: err });
        throw err;
    }
};

export const getOriginalPetitionThunk = (petitionID: string) => async (dispatch: any) => {
    dispatch({ type: GET_ORIGINAL_PETITION });
    try {
        const result = await getOrginalPetition(petitionID);
        dispatch({ type: GET_ORIGINAL_PETITION_SUCCESS, payload: result });
    } catch (err) {
        dispatch({ type: GET_ORIGINAL_PETITION_ERROR, payload: err });
        throw err;
    }
};

export const getSummaryPetitionThunk = (petitionID: string) => async (dispatch: any) => {
    dispatch({ type: GET_SUMMARY_PETITION });
    try {
        const result = await getSummaryPetition(petitionID);
        dispatch({ type: GET_SUMMARY_PETITION_SUCCESS, payload: result });
    } catch (err) {
        dispatch({ type: GET_SUMMARY_PETITION_ERROR, payload: err });
        throw err;
    }
};

const reducer = (state: SummaryState = initialState, action: SummaryAction) => {
    switch (action.type) {
    case GET_TOPFIVE_LIST:
        return {
            ...state,
            topFiveList: {
                loading: true,
                data: [],
                error: null,
            },
        };
    case GET_TOPFIVE_LIST_SUCCESS:
        return {
            ...state,
            topFiveList: {
                loading: false,
                data: action.payload,
                error: null,
            },
        };
    case GET_TOPFIVE_LIST_ERROR:
        return {
            ...state,
            topFiveList: {
                loading: false,
                data: [],
                error: action.payload,
            },
        };
    case GET_ORIGINAL_PETITION:
        return {
            ...state,
            original: {
                loading: true,
                data: null,
                error: null,
            },
        };
    case GET_ORIGINAL_PETITION_SUCCESS:
        return {
            ...state,
            original: {
                loading: false,
                data: action.payload,
                error: null,
            },
        };
    case GET_ORIGINAL_PETITION_ERROR:
        return {
            ...state,
            original: {
                loading: false,
                data: null,
                error: action.payload,
            },
        };
    case GET_SUMMARY_PETITION:
        return {
            ...state,
            summary: {
                loading: true,
                data: null,
                error: null,
            },
        };
    case GET_SUMMARY_PETITION_SUCCESS:
        return {
            ...state,
            summary: {
                loading: false,
                data: action.payload,
                error: null,
            },
        };
    case GET_SUMMARY_PETITION_ERROR:
        return {
            ...state,
            summary: {
                loading: false,
                data: null,
                error: action.payload,
            },
        };
    default:
        return state;
    }
};

export default reducer;
