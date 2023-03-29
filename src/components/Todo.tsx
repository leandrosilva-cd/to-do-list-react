import styles from './Todo.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { Task } from '../classes/Task';

interface TodoProps {
    task: Task;
    onDeleteTask:Function;
    onCompletedTask:Function;
}

export function Todo({onDeleteTask, onCompletedTask, task} : TodoProps) {

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleChecked() {
        onCompletedTask(task.id);
    }

    return (
        <div>
            <div className={task.checked ? styles.checkedbox : styles.Uncheckedbox}>
                <div className={styles.info}>
                    <button onClick={handleChecked} className={styles.checkBtn}>{task.checked ? <CheckCircle size={16} color='var(--purple-dark)' weight='fill' /> : <Circle size={16}/>}</button>
                    <p>{task.content}</p>
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