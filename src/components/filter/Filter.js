import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilterValue } from '../../redux/contact/contact-actions';
import { getFilter } from '../../redux/contact/contact-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onHandleChange = e => dispatch(addFilterValue(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        type="text"
        onChange={onHandleChange}
        value={filter}
      />
    </label>
  );
}
