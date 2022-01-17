import { Button, PageHeader } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../features/login/loginReducer';
import { RootState } from '../ui/store';
import { userActions } from '../user/userReducer';

const selectUser = (state: RootState) => state.user;

const Header = () => {
  const { auth } = useSelector(selectUser);
  const dispatch = useDispatch();
  const openLogin = () => dispatch(loginActions.openLoginDialog(true));
  const logout = () => dispatch(userActions.setUser(null));

  const loggedInHeader = (
    <>
      Hi {auth?.email}! <Button onClick={logout}>Log out</Button>
    </>
  );

  const loggedOutHeader = <Button onClick={openLogin}>Log in</Button>;

  const login = auth?.token ? loggedInHeader : loggedOutHeader;

  return <PageHeader className="site__header" onBack={() => null} title="Game Designer" extra={login}></PageHeader>;
};

export default Header;
