import constants from './Data.Constants';

/**
 * Declare inital state for the Data component
*/ 
const initalState = {
    payLoad: []
};
/**
 * Reducer function for Data component
 * @ param {object} state - contains state from the Data component
 * @ param {object} action - contains action from the Data component 
*/ 
function DataReducer(state = initalState, action){
    switch (action.type) {
        case constants.GET_VALUEAPI:
        return Object.assign({}, state, {
            payLoad : action.payLoad
        })
        default:
        return state;
    }
};
export default DataReducer;