import constants from './Sample.Constants';

/**
@desc- getValue - called after getting value in add button
@return {araay} - return array of object
*/ 
export function getValue(displayVal){
    return{
        type:constants.DISPLAY_VALUE,
        displayVal
    };
}

/**
@desc- editValue - called after click edit button
@return {object} - return selected object
*/ 

export function editValue(item, i){
    return{
        type:constants.EDIT_VALUE,
        item,
        i
    };
}

