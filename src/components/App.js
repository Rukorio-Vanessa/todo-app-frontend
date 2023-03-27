import '../App.css';
import TodoItem from './TodoItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import TodoForm from './TodoForm';
import Heading from './Heading';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/todoitem">
        <TodoItem />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/todoform">
        <TodoForm />
      </Route>
      <Route path="/heading">
        <Heading />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
