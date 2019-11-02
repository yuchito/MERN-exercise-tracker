
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

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
    componentDidMount() {
        // Sends an HTTP GET request to the backend endpoint
        // Get the user list from the DB and add it to dropmenu in the form

        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
            this.setState({ 
                users: response.data.map(user => user.username),
                username: response.data[0].username
            });
            }
        })
        .catch((error) => {
            console.log(error);
        })
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

        //console.log(exercise);

        // Send an HTTP POST request to the backend endpoint
        // endpoint is expecting a JSON object in the req body, so we pass exercise as second arg

        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
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