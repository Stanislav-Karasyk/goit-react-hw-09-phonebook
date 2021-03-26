import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';
import defaultAvatar from './blank-profile-picture.webp';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div>
      <img src={defaultAvatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}
