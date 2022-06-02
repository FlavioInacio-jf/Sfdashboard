import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Brand } from '../../components/Brand';
import { Button } from '../../components/Button';
import { Column } from '../../components/Column';
import { Input } from '../../components/Form/Input';
import { CreateUserMutation } from '../../mutations/createUserMutation';
import { UserRegisterType } from '../../types/userType';
import { Form } from './styles';

const photo_default =
  'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<UserRegisterType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const { mutate: createUserMutate, isSuccess } = CreateUserMutation();

  const onSubmit = (data: UserRegisterType) => {
    if (!isSuccess) {
      reset();
    }
    createUserMutate({
      ...data,
      photo_url: data.photo_url || photo_default
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Brand />
      </header>

      <Column column="1" margin="3rem 0 3rem 0">
        <Input<UserRegisterType>
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          rules={{ min: 3, max: 200, required: 'Name is required' }}
          register={register}
          errors={errors}
        />
      </Column>

      <Column column="1">
        <Input<UserRegisterType>
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          register={register}
          rules={{ min: 3, max: 50, required: 'Name is required' }}
          errors={errors}
        />
      </Column>

      <Column column="1" margin="3rem 0 3rem 0">
        <Input<UserRegisterType>
          label="Photo url"
          name="photo_url"
          type="text"
          placeholder="https://www.myphoto.com"
          rules={{ required: false }}
          register={register}
          errors={errors}
        />
      </Column>

      <Column column="1" margin="3rem 0 3rem 0">
        <Input<UserRegisterType>
          label="Password"
          name="password"
          type="password"
          register={register}
          rules={{ required: 'Password is required' }}
          errors={errors}
        />
      </Column>
      <Button
        type="submit"
        size="large"
        variant="primary"
        disabled={!isValid || !isDirty || isSubmitting}
        flex>
        Register
      </Button>
    </Form>
  );
};

export default Register;
