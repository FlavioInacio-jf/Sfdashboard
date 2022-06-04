import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Brand } from '../components/Brand';
import { Button } from '../components/Button';
import { Column } from '../components/Column';
import { Input } from '../components/Form/Input';
import { LoginMutation } from '../mutations/LoginMutation';
import { Form } from '../styles/homeStyles';
import { CredentialsType } from '../types/credentialsType';
import { withSSRGuest } from '../utils/withSSRGuest';

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<CredentialsType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const { mutate: loginMutate } = LoginMutation();

  const onSubmit = (data: CredentialsType) => {
    loginMutate(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Brand />
      </header>
      <Column column="1">
        <Input<CredentialsType>
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
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
  );
};

export default Login;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  };
});
