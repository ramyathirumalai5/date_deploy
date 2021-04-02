import React, { Component } from 'react';
import styled from 'styled-components';

const Outerdiv = styled.div`
  text-align: center;
  margin:auto;
  width:40%;
  height:20%;
  border: 1px solid lightgray;
  border-radius: 5px;;
  box-shadow: 0 0 10px darkgray;
  margin-top: 30px;`;

  const Container = styled.div`
  position:absolute;
  top:23%;
  left:46%;`;

  

class Header extends Component {

  
  

  render() {
   
   
    return (
      <div>
        <Outerdiv>
           <h1>Date and Time toggler</h1>     
        </Outerdiv>
     
          <br></br>
          <i class="fas fa-calendar-alt dateIcon fa-2x"></i>
          &amp;    <i class="far fa-clock timeIcon fa-2x"></i>
        <Container>
           <input type="checkbox" className = "inner" onClick = {this.props.toggleButton}></input>
          </Container>     
          {/* <i class="fas fa-hourglass-start timeIcon2 fa-2x"></i> */}
          <i class="far fa-clock timeIcon2 fa-2x"></i>
        </div>
    )
  }
}

export default Header
