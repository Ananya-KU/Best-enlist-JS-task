import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CreateButton extends React.Component{

  constructor(){
    super();
    this.state = { number : ""};
  }
  numbervalue = (event)=>{

    this.setState({number : event.target.value});
  }

  formsubmit = (event)=>{

    event.preventDefault();
    alert(" Value entered by the User : "+ this.state.number);
  }

  render(){
    return (
      <div>
      <form onSubmit = {this.formsubmit}>
        
        <h1>  Display the Entered Value - App        </h1>

        <div class= "space">
          <b>Enter the value : </b><input type = "text" onChange = {this.numbervalue}></input><br/>
          <button type="submit">Get Value !!! </button>
        </div>

      </form>
      </div>
    ) 
  }


}

ReactDOM.render(<CreateButton/>,document.getElementById('root'));

