
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        // binding methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            description : '',
            duration : 0,
            date: new Date(),
            users: []

        }

        
    }
    // The user need to select the user associated with the exercise while filling the form
    // Normally the user list will come directly from the DB
    // For now a hardcoded user to test this out
    componentDidMount() {
        this.setState({ 
          users: ['test user', 'Houssam'],
          username: 'Houssam'
        });
      }
    // methods to update the props of state
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    // handling date using date picker library
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    // handle submit event of the form
    onSubmit(e) {
        // prevent the default HTML form submit behavior
        e.preventDefault ();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };

        console.log(exercise);
        // after submitting the user is taken back to the home page
        window.location = '/';

    }
  render() {
    return (
      <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username: </label>
                <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }
                        </select>
              </div>
              <div className="form-group">
                <label>Description: </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}/>
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}/>
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}/>
                </div> 
              </div>

              <div className="form-group">
                  <input type="submit" value="Create New Exercise Log" className="btn btn-success" />
              </div>
          </form>
      </div>
    )
  }
}