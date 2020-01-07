import React, { Component } from 'react';
import Sample from './Sample/Sample.Container';
class App extends Component{
   render(){
      return(
         <div className="header">
            <p className="heading">Employee Details</p>
            <Sample />
         </div>
      );
   }
}
export default App;