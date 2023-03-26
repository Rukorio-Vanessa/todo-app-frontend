import '../App.css';
import Heading from './Heading';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function App() {
  return (
   <>
   <Heading/>
   <main>
    <TodoForm/>
    <TodoItem/>
   </main>
   </>
  );
}

export default App;
