import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/**
@connect- connects the file components & its reducer and function
*/ 

import Data from './Data';
import * as DataActions from './Data.Actions';
import * as SampleActions from '../Sample/Sample.Actions';
export default connect(
    (state) => ({
        displayVal:state.SampleReducer.displayVal,
        item:state.SampleReducer.item,
        i:state.SampleReducer.i,
        payLoad:state.DataReducer.payLoad
    }),
    (dispatch) => ({
        actions: bindActionCreators(DataActions, dispatch),
        SampleActions: bindActionCreators(SampleActions, dispatch)        
    })
)(Data);

