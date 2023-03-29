import { Header } from './components/Header';
import { Todolist } from './components/Todolist';
import { ChangeEvent, FormEvent, InvalidEvent, useState, useEffect } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';
import { Task } from './classes/Task';

function App() {
    // let task: {id:number, content:string, checked:boolean }[]=[]
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const[newTextContent, setNewTextContent] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();
    const newTask = newTextContent;

    setTasks([{
      content: newTask,
      checked: false,
      id: tasks.length + 1
    }, ...tasks]);

    setNewTextContent('');
  }

  function handleNewContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTextContent(event.target.value);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.newTodo}>
          <textarea className={styles.newTaskName} name='task' value={newTextContent} onChange={handleNewContentChange} placeholder='Adicione uma nova tarefa' required />
          <button className={styles.submitTask} type="submit">Criar<PlusCircle size={16} /></button>
        </form>
        <Todolist setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  )
}

export default App
