import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Brand } from '../components/Brand';
import { Button } from '../components/Button';
import { Column } from '../components/Column';
import { Input } from '../components/Form/Input';
import { Toast } from '../components/Toast';
import { LoginMutation } from '../mutations/LoginMutation';
import { CredentialsType } from '../types';
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
    <>
      <Toast />
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-full h-full flex justify-between">
          <div className="flex-1 flex flex-col items-center justify-center px-[1.6rem] bg-[#1f1f1f]">
            <div className="w-[550px] md:w-full bg-[#242424] shadow-lg rounded-lg overflow-hidden p-[3.2rem]">
              <header>
                <Brand />
              </header>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Column column="1">
                  <Input<CredentialsType>
                    label="E-mail"
                    name="email"
                    type="text"
                    placeholder="Enter your username"
                    register={register}
                    errors={errors}
                  />
                </Column>

                <Column column="1" margin="3rem 0 3rem 0">
                  <Input<CredentialsType>
                    label="Senha"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors}
                  />
                </Column>
                <Button
                  w="100%"
                  type="submit"
                  variant="primary"
                  className="h-[4.5rem]"
                  disabled={!isValid || !isDirty || isSubmitting}>
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  };
});
