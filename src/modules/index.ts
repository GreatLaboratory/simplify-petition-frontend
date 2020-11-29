import { combineReducers } from 'redux';
import categories from '../modules/category';
import wordCloud from '../modules/wordCloud';
import selection from '../modules/selection';
import summary from '../modules/summary';

const rootReducer = combineReducers({
    categories,
    wordCloud,
    summary,
    selection,
});

export default rootReducer;
export type RootState = | ReturnType<typeof rootReducer>
