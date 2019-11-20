import React, { Component } from 'react';
import axios from 'axios';

const divStyle = {
  marginLeft: '15px',
  marginRight: '15px'
}
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    // bindings
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    };
  } 
  // method to update props of state
  onChangeUsername(e) {
    this.setState ({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault ();

    const newUser = {
      username: this.state.username,
    };

    //console.log(newUser);
    // Send an HTTP POST request to the backend endpoint
    // endpoint is expecting a JSON object in the req body, so we pass newUser as second arg
    axios.post('http://localhost:5000/users/add', newUser)
    .then(res => console.log(res.data));

    this.setState ({
      username: ''
    });
  }
  render() {
    return (
      <div style={divStyle}>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create new user" className="btn btn-success" />
          </div>
        </form>
        <footer>
          <p>
            ** You need to connect your MongoDB 
          </p>
          </footer>
      </div>
    )
  }
}