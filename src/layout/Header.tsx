import { Button, PageHeader } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginApi from '../features/login/loginApi';
import { openLoginDialog } from '../features/login/loginReducer';
import { RootState } from '../ui/store';

const selectUser = (state: RootState) => state.user;

const Header = () => {
  const { isLoggedIn, email } = useSelector(selectUser);
  const dispatch = useDispatch();
  const openLogin = () => dispatch({ type: openLoginDialog.type, payload: true });
  const logout = loginApi.

  const loggedInHeader = (
    <>
      Hi {email}! <Button onClick={openLogin}>Log out</Button>
    </>
  );

  const loggedOutHeader = <Button onClick={openLogin}>Log in</Button>;

  const login = isLoggedIn ? loggedInHeader : loggedOutHeader;

  return <PageHeader className="site__header" onBack={() => null} title="Game Designer" extra={login}></PageHeader>;
};

export default Header;
