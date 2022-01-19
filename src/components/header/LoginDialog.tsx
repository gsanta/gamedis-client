import TextBlock from '@/layout/TextBlock';
import { Form, Input, Modal } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import useApiMutation from '../../hooks/useApiMutation';
import { userActions } from '../../features/user/userReducer';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

type LoginDialogProps = {
  onClose(): void;
};

const LoginDialog = ({ onClose }: LoginDialogProps) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { mutate, error } = useApiMutation<LoginResponseDto>('v1/auth/login', 'post', {
    onSuccess(data) {
      const authHeader = data?.headers.authorization;
      const { email } = data?.data?.data?.attributes;

      dispatch(userActions.login({ authHeader, email }));
      onClose();
    },
  });

  const onSubmit = async () => {
    try {
      const { email, password } = await form.validateFields();
      form.resetFields();
      mutate({ user: { email, password } });
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const errorMessage =
    error?.code === '401' ? <TextBlock color="red-1">{error.message || 'Unkown error'}</TextBlock> : null;

  return (
    <Modal title="Basic Modal" visible onOk={onSubmit} onCancel={onClose}>
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
          <Input type="text" placeholder="Please input your password" style={{ width: '20rem' }} />
        </Form.Item>
        {errorMessage}
      </Form>
    </Modal>
  );
};

export default LoginDialog;