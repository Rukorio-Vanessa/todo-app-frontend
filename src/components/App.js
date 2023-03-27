import '../App.css';
import Heading from './Heading';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <TodoItem />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
