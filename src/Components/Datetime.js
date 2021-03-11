import React, { Component } from 'react'

class Datetime extends Component {

 state = {
   date:new Date(),
   time:new Date().toLocaleTimeString(),
   
 }

 updateTime = () =>{

  setInterval(() => {
   this.setState({date:new Date() , time:new Date().toLocaleTimeString()})
 }, 1000);
}

  render() {
  
    const dateFormat = (this.state.date).getDate()+'/'+((this.state.date).getMonth()+1) + '/'+ (this.state.date.getFullYear()); 
    

    return (
      <div>
        {this.props.displayBoth && <h3> Today's Date is : {dateFormat} </h3>}
       
       <h4>Current time is : {this.state.time}</h4>
       {this.updateTime()}
      </div>
    )
  }
}

export default Datetime
