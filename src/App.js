import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/ToDoTemplate';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
