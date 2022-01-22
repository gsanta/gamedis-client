import LoginDialog from '@/components/header/LoginDialog';
import { globalContext } from '@/globalContext';
import { Button, PageHeader } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';

const Header = observer(() => {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const {
    authStore: { logout, email, isLoggedIn },
  } = useContext(globalContext);

  const loggedInHeader = (
    <>
      Hi {email}! <Button onClick={logout}>Log out</Button>
    </>
  );

  const loggedOutHeader = <Button onClick={() => setLoginDialogOpen(true)}>Log in</Button>;

  const login = isLoggedIn ? loggedInHeader : loggedOutHeader;

  return (
    <>
      <PageHeader className="site__header" onBack={() => null} title="Game Designer" extra={login}></PageHeader>;
      {isLoginDialogOpen ? <LoginDialog onClose={() => setLoginDialogOpen(false)} /> : null}
    </>
  );
});

export default Header;
