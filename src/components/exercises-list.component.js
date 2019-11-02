import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Exercise component
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)
export default class ExercisesList extends Component {
  //Add a constructor to initialize the state with an empty exercises array and to bind this delete method
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {exercises: []};
  }
  
  //Get the list of exercises from the database
  componentDidMount() {
    axios.get('http://localhost:5000/exercises')
    .then(response => {
      this.setState({ exercises: response.data })
    })
    .catch ((error) => {
      console.log(error);
    })
  }

  //Allow users to delete exercises
  deleteExercise(id) {

    axios.delete('http://localhost:5000/exercises/' + id)
    .then(res => console.log(res.data));

    // update the state of exercises and filter the deleted exercise
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    //iterates through the list of exercise items
    return this.state.exercises.map(currentexercise => {
      //Each item is output with Exercise component
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-success">
            <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}