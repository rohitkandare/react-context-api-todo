import './App.css';
import TodoList from './todo/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContext from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoContext >
         <TodoList />
      </TodoContext>
    </div>
  );
}

export default App;
