import styles from '../../styles/comments/CommentsList.module.css';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  if (!comments) return;
  return (
    <ul className={styles['comments-list']}>
      {comments.map(({ body, color, id }) => (
        <Comment key={id} {...{ body, color }} />
      ))}
    </ul>
  );
};

export default CommentsList;
