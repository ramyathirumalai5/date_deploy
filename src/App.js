
import React,{ Component } from 'react';
import './App.css';
import Datetime from './Components/Datetime';
import Header from './Components/Header';

class App extends Component {
  state = {
    displayBoth:true
  }

  toggleButton = () =>{
    
    const current = this.state.displayBoth;
    this.setState({displayBoth:!current});
    
  }
  render () {
    let buttonName;
    if(this.state.displayBoth)
    {
      buttonName = ' Display Time only';
    }
    else
    {
      buttonName = ' Show Date and time';
    }

    
  return (
    <div className="App">
      <Header toggleButton = {this.toggleButton} buttonName = {buttonName}/>
     <Datetime displayBoth = {this.state.displayBoth ? true : false}/>
    </div>
  );
}

}

export default App;
