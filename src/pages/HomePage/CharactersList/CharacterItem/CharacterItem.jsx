import React, { useState } from "react";

export const CharactersItem = ({item, handleDelete, handleEdit}) => {
  const {created, name} = item;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(name);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEdit((edit) => !edit);
  };

  const onSave = (newName, created) => {
    handleEdit(newName, created);
    setIsEdit(false);
  };

  const onDelete = (created) => {
    handleDelete(created);
  };

  return (
    <li key={created} className="character">
      <div className="character__header">
        {isEdit ? (
          <input value={value} onChange={onChange} />
        ) : (
          <h2 className="character__name">{name}</h2>
        )}
        <div>
          {!isEdit && (
            <div>
              <button onClick={toggleEditMode}>Edit</button>
              <button onClick={() => onDelete(created)}>X</button>
            </div>
          )}
          {isEdit && (
            <div>
              <button onClick={() => onSave(value, created)}>Save</button>
              <button onClick={toggleEditMode}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
