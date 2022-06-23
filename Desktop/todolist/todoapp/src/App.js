import { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { Title } from './components/Title';
import { Todolist } from './components/Todolist';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList = {taskList} setTaskList = {setTaskList}/>
      <Todolist taskList = {taskList} setTaskList = {setTaskList}/>
    </div>
  );
}

export default App;
