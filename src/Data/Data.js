import React from 'react';
import _ from 'lodash';
import DataItems from './DataItems';
import {Table} from "react-bootstrap";
import Proptypes from "prop-types";

class Data extends React.Component{
constructor(props) {
    super(props);
/**
 *@desc inital state
*/
    this.state = {
        showEdit:false
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);    
  }

componentDidMount() {
    this.props.actions.getValueAPI();
}

/**
 *@desc onDeleteClick - Called after click Delete button
 *@param {string} - selected value 
*/ 

onDeleteClick(item, i){ 
    var displayVal = this.props.displayVal;
    var newData= [];
    displayVal.map((data, idx) => {
        if((idx !== i)){
            newData.push(data);
        }
    })
    this.setState({showEdit:false});         
    this.props.SampleActions.getValue(newData);     
};

/**
 *@desc onEditClick - Called after click edit button
 *@param {string} - selected value  
*/ 

onEditClick(item, i){
    this.setState({showEdit:true}); 
    this.props.SampleActions.editValue(item, i);   
}

/**
 *@desc render method
 *@dreturn {ReactElement} dataComponent
*/ 

render(){
    const {displayVal, item, payLoad} = this.props;
    const{showEdit} = this.state;
    return(
    <div className = "dataComp">
        {!_.isEmpty(displayVal) ? <Table striped bordered hover>
            <thead>
                <tr className="tableHead">
                    <th>NAME</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
                <tbody>
                        {displayVal.map((item, i) => {
                    return (<tr key={i}>
                                <td> 
                                        {item} 
                                </td>
                                <td><button key={i} onClick={()=>this.onEditClick(item, i)}>Edit</button></td>
                                <td><button onClick={()=>this.onDeleteClick(item, i)}>Delete</button></td>
                            </tr>)
                        }
                        )
                    }
                </tbody>
        </Table> : <div></div>}
        
            <br/>
            {showEdit ? <DataItems displayVal = {this.props.displayVal} editName = {this.props.item} SampleActions = {this.props.SampleActions} />: ""}
    </div>
    )
}
}
export default Data;

Data.prototypes = {
    displayVal: Proptypes.array,
    item: Proptypes.string,
    payLoad: Proptypes.array    
}