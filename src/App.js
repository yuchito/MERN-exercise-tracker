import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/new-exercise.component";
import CreateUser from "./components/new-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />
    </Router>
  );
}

export default App;
