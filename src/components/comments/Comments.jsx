import { useRef, useState } from 'react';

import { DEFAULT_COLOR } from '../constants';

import styles from '../../styles/comments/Comments.module.css';
import CommentsList from './CommentsList';

const Comments = ({ activeItem = {}, setActiveItem }) => {
  const colorRef = useRef(null);
  const [textInput, setTextInput] = useState('');
  const { id, comments } = activeItem;

  const handleColorChange = e => {
    colorRef.current.value = e.target.value;
  };

  const handleTextChange = e => {
    setTextInput(e.target.value);
  };

  const resetFormValues = () => {
    colorRef.current.value = DEFAULT_COLOR;
    setTextInput('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    setActiveItem({
      ...activeItem,
      comments: [
        ...activeItem.comments,
        {
          body: textInput,
          color: colorRef.current.value,
          id: `${id}-${comments.length}`,
        },
      ],
    });

    resetFormValues();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments #{id}</h1>
      <CommentsList comments={comments} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles['color-input']}
          type="color"
          defaultValue={DEFAULT_COLOR}
          ref={colorRef}
          onChange={e => handleColorChange(e)}
        />
        <textarea
          value={textInput}
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
