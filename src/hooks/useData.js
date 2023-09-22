import { useEffect, useState } from 'react';
import {
  EMPTY_ITEM,
  INITIAL_ITEM,
  INITIAL_ITEMS,
} from '../components/constants';

export const useData = () => {
  const storedItems = JSON.parse(localStorage.getItem('items'));
  const storedActiveItem = JSON.parse(
    localStorage.getItem('activeItem') ?? JSON.stringify(INITIAL_ITEM)
  );
  const [items, setItems] = useState(
    storedItems?.length ? storedItems : INITIAL_ITEMS
  );
  const [activeItem, setActiveItem] = useState(
    storedActiveItem || INITIAL_ITEM
  );

  useEffect(() => {
    const updatedItems = items.map(item =>
      item.id === activeItem.id ? activeItem : item
    );

    setItems(updatedItems);
  }, [activeItem]);

  useEffect(() => {
    const isActiveItemDeleted =
      items.findIndex(item => item.id === activeItem.id) < 0 ? true : false;

    if (isActiveItemDeleted) {
      setActiveItem(items[0] || EMPTY_ITEM);
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('activeItem', JSON.stringify(activeItem));
  }, [activeItem]);

  return { items, activeItem, setItems, setActiveItem };
};
