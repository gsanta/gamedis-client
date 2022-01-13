import TextBlock from '@/layout/TextBlock';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import { Form, Input, Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../ui/store';
import { useLoginMutation } from './loginApi';
import { openLoginDialog } from './loginReducer';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

const LoginDialog = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const isOpen = useSelector((state: RootState) => state.login.isDialogOpen);
  const closeDialog = () => dispatch({ type: openLoginDialog.type, payload: false });

  const [triggerLogin, { status, error }] = useLoginMutation();

  if (status === QueryStatus.fulfilled) {
    closeDialog();
  }

  const onSubmit = async () => {
    try {
      const { email, password } = await form.validateFields();
      triggerLogin({ email, password });
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const errorMessage =
    error?.code === '401' ? <TextBlock color="red-1">{error.message || 'Unkown error'}</TextBlock> : null;

  return (
    <Modal title="Basic Modal" visible={isOpen} onOk={onSubmit} onCancel={closeDialog}>
      <Form form={form} name="dynamic_rule">
        <Form.Item
          {...formItemLayout}
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
          style={{ columnGap: '1rem' }}
        >
          <Input type="email" placeholder="Please input your email" style={{ width: '20rem' }} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
          style={{ columnGap: '1rem' }}
        >
          <Input type="password" placeholder="Please input your password" style={{ width: '20rem' }} />
        </Form.Item>
        {errorMessage}
      </Form>
    </Modal>
  );
};

export default LoginDialog;
