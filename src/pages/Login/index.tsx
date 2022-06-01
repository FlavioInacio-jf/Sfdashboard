import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Column } from '../../components/Column';
import { Input } from '../../components/Form/Input';
import { Link } from '../../components/Link';
import { Title } from '../../components/Title';
import { Toast } from '../../components/Toast';
import { LoginMutation } from '../../mutations/LoginMutation';
import { CredentialsType } from '../../types/credentialsType';
import {
  Brand,
  Container,
  FirstContent,
  Form,
  SecondContent,
  SecondContentDescription
} from './styles';

export const Login: FC = () => {
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
      <Container>
        <FirstContent>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <header>
              <Brand>
                <span>S</span>
                <span>F</span> Dashboard
              </Brand>
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
        </FirstContent>

        <SecondContent>
          <Title variant="light" size="extraLarge" font="inter" weight="700">
            Now here?
          </Title>
          <SecondContentDescription>
            Click on the link below and discover a smart and fast dashboard
          </SecondContentDescription>
          <Link to="register" variant="light" size="large">
            Register
          </Link>
        </SecondContent>
      </Container>
      <Toast />
    </>
  );
};
