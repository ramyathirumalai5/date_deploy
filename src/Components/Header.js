import React, { Component } from 'react'

class Header extends Component {

  
  render() {
   
   
    return (
      <div>
      <h1>Date and Time toggler</h1>     
      <button onClick = {this.props.toggleButton} style = {{padding:'10px'}} >{this.props.buttonName}</button>   
      </div>
    )
  }
}

export default Header
