import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flex from '../../layout/Flex';
import { RootState } from '../../ui/store';
import { useLoginMutation } from './loginApi';
import { openLoginDialogAction } from './loginReducer';

const LoginDialog = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isOpen = useSelector((state: RootState) => state.login.isDialogOpen);
  const closeDialog = () => dispatch({ type: openLoginDialogAction.type, payload: false });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const [triggerLogin, { status, error, data }] = useLoginMutation();
  const login = () => {
    triggerLogin({ email, password });
  };

  return (
    <Modal title="Basic Modal" visible={isOpen} onOk={login} onCancel={closeDialog}>
      <Flex direction="column">
        <span>Username</span>
        <Input value={email} onChange={onInputChange} />
        <span>Password</span>
        <Input value={password} onChange={onPasswordChange} />
      </Flex>
    </Modal>
  );
};

export default LoginDialog;
