import { Todo } from './Todo';
import styles from './Todolist.module.css';
import { Task } from '../classes/Task';

interface TaskProps {
    tasks: Task[];
}

export function Todolist({tasks}: TaskProps){

    function deleteTask(contentToDelete:string) {
        // const newTasks = tasks.filter( task => {
        //     return tasks != contentToDelete
        // })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.newTodoInfo}>
                    <p>Tarefas criadas</p> 
                    <span>5</span>
                </div>

                <div className={styles.completedTodoInfo}>
                    <p>Concluídas</p> 
                    <span>2 de 5</span>
                </div>
            </div>
            {
                tasks.map((task)=><Todo key={task.id} task={task} onDeleteTask={deleteTask} />)
            }
        </div>
    );
}