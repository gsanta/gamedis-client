import { Button, PageHeader } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openLoginDialogAction } from '../features/login/loginReducer';

const Header = () => {
  const dispatch = useDispatch();
  const openLogin = () => dispatch({ type: openLoginDialogAction.type, payload: true });

  const login = <Button onClick={openLogin}>Log in</Button>;

  return <PageHeader className="site__header" onBack={() => null} title="Game Designer" extra={login}></PageHeader>;
};

export default Header;
