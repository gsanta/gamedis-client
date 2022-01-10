import { Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flex from '../../layout/Flex';
import { RootState } from '../../ui/store';
import { openLoginDialogAction } from './loginReducer';

const LoginDialog = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const isOpen = useSelector((state: RootState) => state.login.isDialogOpen);
  const closeDialog = () => dispatch({ type: openLoginDialogAction.type, payload: false });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <Modal title="Basic Modal" visible={isOpen} onOk={closeDialog} onCancel={closeDialog}>
      <Flex direction="column">
        <span>Username</span>
        <Input value={userName} onChange={onInputChange} />
        <span>Password</span>
        <Input value={password} onChange={onPasswordChange} />
      </Flex>
    </Modal>
  );
};

export default LoginDialog;
