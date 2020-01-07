import constants from './Sample.Constants';

/**
 * Declare inital state for the sample component
*/ 

const initalState = {
    displayVal: [],
    item:"",
    i:""
};

/**
 * Reducer function for sample component
 * @ param {object} state - contains state from the sample component
 * @ param {object} action - contains action from the sample component 
*/ 

function SampleReducer(state = initalState, action){
    switch (action.type) {
        case constants.DISPLAY_VALUE:
        return Object.assign({}, state, {
            displayVal : action.displayVal
        })
        case constants.EDIT_VALUE:
        return Object.assign({}, state, {
            item : action.item,
            i:action.i
        })
        default:
        return state;
    }
};
export default SampleReducer;