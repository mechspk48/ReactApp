import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Sample from './Sample';
import * as SampleActions from './Sample.Actions';

/**
@connect- connects the file components & its reducer and function
*/ 

export default connect(
    (state) => ({
        displayVal:state.SampleReducer.displayVal
    }),
    (dispatch) => ({
        actions: bindActionCreators(SampleActions, dispatch)
    })
)(Sample);

