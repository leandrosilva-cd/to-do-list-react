import styles from './Todo.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react'

export function Todo() {
    return (
        <div>
            <div className={styles.Uncheckedbox}>
                <div className={styles.info}>
                    <button className={styles.checkBtn}><Circle size={16}/></button>
                    <p>Criar to do app</p>
                </div>
                <button className={styles.deleteBtn}><Trash size={16} /></button>
            </div>

            <div className={styles.checkedbox}>
            <div className={styles.info}>
                <button className={styles.checkBtn}><CheckCircle size={16} color='var(--purple-dark)' weight='fill' /></button>
                <p>Criar to do app</p>
            </div>
            <button className={styles.deleteBtn}><Trash size={16} /></button>
            </div>
        </div>
    )
}