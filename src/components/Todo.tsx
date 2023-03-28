import styles from './Todo.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { Task } from '../classes/Task';

interface TodoProps {
    task: Task;
    onDeleteTask:Function;
}

export function Todo({onDeleteTask, task} : TodoProps) {

    function handleDeleteTask() {
        onDeleteTask()
    }

    function handleChecked() {

    }

    return (
        <div>
            <div className={task.checked ? styles.checkedbox : styles.Uncheckedbox}>
                <div className={styles.info}>
                    <button onClick={handleChecked} className={styles.checkBtn}><Circle size={16}/></button>
                    <p>Criar to do app</p>
                </div>
                <button onClick={handleDeleteTask} className={styles.deleteBtn}><Trash size={16} /></button>
            </div>

            {/* <div className={styles.checkedbox}>
            <div className={styles.info}>
                <button className={styles.checkBtn}><CheckCircle size={16} color='var(--purple-dark)' weight='fill' /></button>
                <p>Criar to do app</p>
            </div>
            <button className={styles.deleteBtn}><Trash size={16} /></button>
            </div>
             */}
        </div>
    )
}