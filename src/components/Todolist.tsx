import { Todo } from './Todo';
import styles from './Todolist.module.css';
import { Task } from '../classes/Task';
import { ClipboardText } from 'phosphor-react';

interface TaskProps {
    tasks: Task[];
    setTasks: Function;
}


export function Todolist({tasks, setTasks}: TaskProps){

    function handleDeleteTask(contentToDelete:number) {
        const taskToDelete = tasks.filter(task =>  { return task.id !== contentToDelete});
        setTasks(taskToDelete);
    }

    function completedTask(taskDone:number) {
        const taskToCheck = tasks.find(task => task.id === taskDone);
        handleDeleteTask(taskDone);
        (taskToCheck as Task).checked = !(taskToCheck as Task).checked;
        setTasks((current: Task[])=>[...current, taskToCheck].sort((a,b)=>a?.checked ? 1 : -1));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.newTodoInfo}>
                    <p>Tarefas criadas</p> 
                    <span>{tasks.length}</span>
                </div>

                <div className={styles.completedTodoInfo}>
                    <p>Concluídas</p> 
                    <span>{tasks.filter(task=>task.checked==true).length} de {tasks.length}</span>
                </div>
            </div>

            {
                tasks.length > 0 &&
                (tasks.map((task)=><Todo key={task.id} task={task} onDeleteTask={handleDeleteTask} onCompletedTask={completedTask} />))
            }
            
            {
                tasks.length == 0 &&
                (
                    <div className={styles.tasklessText}>
                        <div className={styles.clip}><ClipboardText className={styles.clip} size={56} /></div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p><strong>Crie tarefas e organize seus itens a fazer</strong></p>
                    </div>
                )
            }
        </div>
    );
}