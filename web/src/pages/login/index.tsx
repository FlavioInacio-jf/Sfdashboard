import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Column } from '../../components/Column';
import { Input } from '../../components/Form/Input';
import { Toast } from '../../components/Toast';
import { LoginMutation } from '../../mutations/LoginMutation';
import { CredentialsType } from '../../types/credentialsType';
import { withSSRGuest } from '../../utils/withSSRGuest';
import { schema } from './schema';
import { Form } from './styles';

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<CredentialsType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const { mutate: loginMutate } = LoginMutation();

  const onSubmit = (data: CredentialsType) => {
    loginMutate(data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Column column="1">
          <Input<CredentialsType>
            label="E-mail"
            name="email"
            type="text"
            placeholder="user@gmail.com"
            register={register}
            errors={errors}
          />
        </Column>

        <Column column="1" margin="3rem 0 3rem 0">
          <Input<CredentialsType>
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
        </Column>
        <Button
          type="submit"
          size="large"
          variant="primary"
          disabled={!isValid || !isDirty || isSubmitting}
          flex>
          Login
        </Button>
      </Form>
      <Toast />
    </>
  );
};

export default Login;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  };
});
