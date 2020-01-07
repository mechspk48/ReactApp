import React from 'react';
import Data from '../Data/Data.Container';
import _ from 'lodash';
import Proptypes from "prop-types";

class Sample extends React.Component{
    constructor(props) {
        super(props); 
/**
 *@desc inital state
*/      
    this.state = {
        showAdd:false
    };
    this.onAddClick = this.onAddClick.bind(this);    
}

/**
 *@desc onAddClick - Called after click add button
*/ 
onAddClick(){
    var typedName = [...this.props.displayVal];
    this.setState({showAdd:true});
        if((!_.isEmpty(this.name.value)) && (!_.isUndefined(typedName))){
            typedName.push(this.name.value);
            this.props.actions.getValue(typedName); 
        }
}

/**
 *@desc render method
 *@dreturn {ReactElement} SampleComponent
*/ 

render(){
    const {showAdd} = this.state;
    return(
        <div> 
            <div className="addingDetails">
            <p className="addName">Add Name </p>
            <div>Name: <input name="username" type="text" ref={(name) => this.name = name}/></div><br/> 
            <button onClick={()=>this.onAddClick()}>Add</button><br/></div>
            {showAdd ? <Data/>: ""}
        </div>
    )
}
}
export default Sample;

Sample.prototypes = {
    displayVal: Proptypes.array
}