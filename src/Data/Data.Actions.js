import constants from './Data.Constants';

/**
@desc- getValueAPI - fetch API call - Example
*/ 

export const getValueAPI = () => dispatch => {
  fetch("https://api.sheety.co/cb14b36e-1513-45fa-bdb0-8b35c4feaac8")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("gfjhghfjkjk===", data);
      dispatch({ type: constants.GET_VALUEAPI, payLoad: data });
    });
};
