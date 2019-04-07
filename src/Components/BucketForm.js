import React from "react";

class BucketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ input: "" });
    this.props.addInput(event, this.state.input)
  }


  render(){
    return(
      <div className="bucket-form">
      <form onSubmit={this.handleSubmit}>
        <input 
        type='text'
        name='input'
        value={this.state.input}
        placeholder=""
        onChange={this.handleChanges}
        />
        <button>Add Adventure</button>
      </form>
      </div>
    );
  }
}

export default BucketForm;