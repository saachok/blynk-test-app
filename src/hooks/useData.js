import { useEffect, useState } from 'react';
import { INITIAL_ITEM, INITIAL_ITEMS } from '../components/constants';

export const useData = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [activeItem, setActiveItem] = useState(INITIAL_ITEM);

  useEffect(() => {
    const updatedItems = items.map(item =>
      item.id === activeItem.id ? activeItem : item
    );
    setItems(updatedItems);
  }, [activeItem]);

  useEffect(() => {
    if (items.findIndex(item => item.id === activeItem.id) < 0) {
      setActiveItem(items[0]);
    }
  }, [items]);

  return { items, activeItem, setItems, setActiveItem };
};
