import { useEffect } from 'react';
import { CharactersList } from './CharactersList/CharactersList';
import { getItemSucsess, deleteItem, editItem } from '../../store/actions.js';
import { useStore } from '../../store/useStore';

export const HomePage = () => {
  const [state, dispatch] = useStore([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getItemSucsess(data.results));
      });
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (id, newValue) => {
    dispatch(editItem(id, newValue))
  };

  return (
    <main>
      <section>
        <CharactersList list={state.data} handleDelete={handleDelete} handleEdit={handleEdit} />
      </section>
    </main>
  );
};
