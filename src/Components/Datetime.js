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
      <div className ="card2">
      <div >
        {this.props.displayBoth && <h3> <i class="far fa-calendar-alt"></i> : {dateFormat} </h3>}
      <div className = "clockPosition" >
        <div className = "clock">
      <div className ="num num1"> 1      </div>
      <div className ="num num2"> 2      </div>
      <div className ="num num3"> 3      </div>
      <div className ="num num4"> 4     </div>
      <div className ="num num5"> 5      </div>
      <div className ="num num6"> 6      </div>
      <div className ="num num7"> 7      </div>
      <div className ="num num8"> 8     </div>
      <div className ="num num9"> 9      </div>
      <div className ="num num10"> 10      </div>
      <div className ="num num11"> 11      </div>
      <div className ="num num12"> 12      </div>
      <h4 className = "time-display">{this.state.time}</h4>

      </div>


    </div>
       
       {this.updateTime()}
      </div>
      </div>
    )
  }
}

export default Datetime;

