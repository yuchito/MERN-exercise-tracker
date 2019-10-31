import React, { Component } from 'react';

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
  onChangeUsername(e) {
    this.setState ({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault ();

    const newUser = {
      usename: this.state.username,
    };

    console.log(newUser);

    this.setState ({
      username: ''
    });
  }
  render() {
    return (
      <div>
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
      </div>
    )
  }
}