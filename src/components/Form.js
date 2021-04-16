import React, {Fragment} from 'react';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: '',
    };
    
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your donation must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <Fragment>
      <div className="app">
      
        <div className="container">
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Donation:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <input type="submit" value="Submit"></input>
      {this.state.errormessage}
      </form>
      </div>
      </div>
      </Fragment>
    );
  }
}

export default Form;
