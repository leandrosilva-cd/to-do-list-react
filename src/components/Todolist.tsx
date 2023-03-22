import { Todo } from './Todo';
import styles from './Todolist.module.css'

export function Todolist(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.newTodoInfo}>
                    <p>Tarefas criadas</p> 
                    <span>5</span>
                </div>

                <div className={styles.completedTodoInfo}>
                    <p>Concluías</p> 
                    <span>2 de 5</span>
                </div>
            </div>

            <Todo />

        </div>
    );
}