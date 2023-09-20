import { useRef } from 'react';

import styles from '../../styles/comments/Comments.module.css';
import CommentsList from './CommentsList';

const Comments = props => {
  const { id, comments } = props.article;
  let colorRef = useRef(null);
  let textRef = useRef(null);

  const handleTextChange = e => {
    textRef = e.target.value;
  };

  const handleColorChange = e => {
    colorRef = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(colorRef, textRef);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments #{id}</h1>
      <CommentsList comments={comments} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles['color-input']}
          type="color"
          defaultValue={'#4BDF49'}
          ref={colorRef}
          onChange={e => handleColorChange(e)}
        />
        <textarea
          ref={textRef}
          onChange={e => handleTextChange(e)}
          className={styles['text-input']}
          type="text"
          placeholder="Type name here..."
          required
        />
        <button type="submit" className={styles['add-btn']}>
          Add New
        </button>
      </form>
    </div>
  );
};

export default Comments;
