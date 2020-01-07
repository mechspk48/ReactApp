import React from 'react';
import Proptypes from "prop-types";
import _ from 'lodash';

class DataItems extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        showUpdate:true
    };
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);    
  }
  
/**
 *@desc onUpdateClick - Called after click update button
 *@param {string} name- selected value  
*/ 

onUpdateClick(name){
    let replaceVal;
    let x = [];
    const{displayVal, editName} = this.props;
        if(!_.isEmpty(name.value)){
        replaceVal = _.replace(displayVal, editName, name.value);
        displayVal.map((item) => {
            if(item === editName){
                item = name.value;
            }
            x.push(item);            
        })    
    }
    this.props.SampleActions.getValue(x);
}

/**
 *@desc onCancelClick - Called after click cancel button
*/ 

onCancelClick(){
    this.setState({showUpdate:false});
}

/**
 *@desc render method
 *@dreturn {ReactElement} dataitemcomponent
*/

render(){
    const {editName} = this.props;
    const {showUpdate} = this.state;
    let showUpdateDetails;
   if(showUpdate){
      showUpdateDetails = true;
   } else if (showUpdate === false){
      showUpdateDetails = false;       
   } 
    return(
        <div >
        {showUpdateDetails ? 
            <div className="editName"><p className="updateName">Update Name</p>
          <input name="username" type="text" defaultValue={editName} ref={(name) => this.name = name}/>
          <button onClick={()=>this.onUpdateClick(this.name)}>Update</button>
          <button onClick={()=>this.onCancelClick(this.name)}>Cancel</button></div>  : ""}       
        </div>
    )
}
}
export default DataItems;

DataItems.prototypes = {
    editName: Proptypes.string
}
