import { combineReducers } from 'redux';
import SampleReducer from './Sample/Sample.Reducer';
import DataReducer from './Data/Data.Reducer';

const rootReducer = combineReducers({
    SampleReducer:SampleReducer,
    DataReducer:DataReducer    
});
export default rootReducer;