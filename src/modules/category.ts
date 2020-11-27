const GET_CATEGORYLIST = 'category/GET_CATEGORYLIST' as const;
const CHANGE_CATEGORY_ID = 'category/CHANGE_CATEGORY_ID' as const;

export const getCategory = () => ({
    type: GET_CATEGORYLIST
});
export const changeCategoryID = (data: string) => ({
    type: CHANGE_CATEGORY_ID,
    payload: data,
});

export type CategoryState = {
    id: string,
    name: string,
}
export type CategoryListState = [CategoryState[], CategoryState[]]

export type initialStateType = {
    currentID: string,
    categoryList: CategoryListState,
}

type CategoryAction = 
    | ReturnType<typeof getCategory>
    | ReturnType<typeof changeCategoryID>

const initialState: initialStateType = {
    currentID: '',
    categoryList: [
        [{
            id: '35', 
            name: '정치개혁'
        }, {
            id: '36', 
            name: '외교/통일/국방'
        }, {
            id: '37', 
            name: '일자리'
        }, {
            id: '38', 
            name: '미래'
        }, {
            id: '39', 
            name: '성장동력'
        }, {
            id: '40', 
            name: '농산어촌'
        }, {
            id: '41', 
            name: '보건복지'
        }, {
            id: '42', 
            name: '육아/교육'
        }], [{
            id: '43', 
            name: '안전/환경'
        }, {
            id: '44', 
            name: '저출산/고령화대책'
        }, {
            id: '45', 
            name: '행정'
        }, {
            id: '46', 
            name: '반려동물'
        }, {
            id: '47', 
            name: '교통/건축/국토'
        }, {
            id: '48', 
            name: '경제민주화'
        }, {
            id: '49', 
            name: '인권/성평등'
        }, {
            id: '50', 
            name: '문화/예술/체육/언론'
        }]
    ]};

const reducer = (state: initialStateType = initialState, action: CategoryAction) => {
    switch (action.type) {
    case GET_CATEGORYLIST:
        return state;    
    case CHANGE_CATEGORY_ID:
        return {
            ...state,
            currentID: action.payload,
        };    
    default:
        return state;
    }
};

export default reducer;
