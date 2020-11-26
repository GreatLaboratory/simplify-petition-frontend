const CHANGE_SELECTION = 'selection/CHANGE_SELECTION' as const;
const GET_SELECTION = 'selection/GET_SELECTION' as const;

export const changeSelction = (payload: string) => ({
    type: CHANGE_SELECTION,
    payload,
});

export const getSelction = () => ({
    type: GET_SELECTION,
});

export type SelectionState = {
    current: string,
}

type SelectionAction = 
    | ReturnType<typeof changeSelction>
    | ReturnType<typeof getSelction>

const initialState: SelectionState = {
    current: '',
};

const reducer = (state: SelectionState = initialState, action: SelectionAction) => {
    switch (action.type) {
    case CHANGE_SELECTION:
        return {
            current: action.payload,
        };         
    case GET_SELECTION:
        return state;
    default:
        return state;
    }
};

export default reducer;
