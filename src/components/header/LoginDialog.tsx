import TextBlock from '@/components/building_blocks/TextBlock';
import { LoginResponseDto } from '@/features/auth/LoginResponseDto';
import { globalContext } from '@/globalContext';
import useApiMutation from '@/hooks/useApiMutation';
import { Form, Input, Modal } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

type LoginDialogProps = {
  onClose(): void;
};

const LoginDialog = observer(({ onClose }: LoginDialogProps) => {
  const [form] = Form.useForm();
  const { authStore } = useContext(globalContext);

  const { mutate, error } = useApiMutation<LoginResponseDto>('v1/auth/login', 'post', {
    onSuccess(data) {
      const authHeader = data?.headers.authorization;
      const { email } = data?.data?.data?.attributes;
      authStore.login(email, authHeader);
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
          <Input
            type="email"
            aria-label="email-input"
            placeholder="Please input your email"
            style={{ width: '20rem' }}
          />
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
});

export default LoginDialog;
