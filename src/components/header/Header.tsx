import { Button, PageHeader } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { userActions } from '../../features/user/userReducer';
import LoginDialog from '@/components/header/LoginDialog';

const selectUser = (state: RootState) => state.user;

const Header = () => {
  const { auth } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const logout = () => dispatch(userActions.logout());

  const loggedInHeader = (
    <>
      Hi {auth?.email}! <Button onClick={logout}>Log out</Button>
    </>
  );

  const loggedOutHeader = <Button onClick={() => setLoginDialogOpen(true)}>Log in</Button>;

  const login = auth?.token ? loggedInHeader : loggedOutHeader;

  return (
    <>
      <PageHeader className="site__header" onBack={() => null} title="Game Designer" extra={login}></PageHeader>;
      {isLoginDialogOpen ? <LoginDialog onClose={() => setLoginDialogOpen(false)} /> : null}
    </>
  );
};

export default Header;
