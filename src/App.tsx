import { Header } from './components/Header';
import { Todolist } from './components/Todolist';

import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.newTodo}>
          <textarea className={styles.newTaskName} name='newtask' placeholder='Adicione uma nova tarefa' required />
          <button className={styles.submitTask} type="submit">Criar<PlusCircle size={16} /></button>
        </form>
        <Todolist />
      </div>
    </div>
  )
}

export default App
