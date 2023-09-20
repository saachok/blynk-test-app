import styles from '../../styles/comments/Comment.module.css';

const Comment = ({ body, color, id }) => {
  return (
    <li className={styles.container}>
      <div className={styles.avatar} style={{ backgroundColor: color }}></div>
      <div className={styles.text}>
        <p>{body}</p>
      </div>
    </li>
  );
};

export default Comment;
