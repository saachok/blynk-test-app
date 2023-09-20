import styles from '../../styles/todo/Item.module.css';

const Item = ({ name, comments }) => {
  return (
    <li className={styles.container}>
      <div className={styles.info}>
        <p>{name}</p>
        <span className={styles.counter}>{comments.length}</span>
      </div>
      <button className={styles['delete-btn']}>Delete</button>
    </li>
  );
};

export default Item;
