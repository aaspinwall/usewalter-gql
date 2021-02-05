import { gql, useQuery } from '@apollo/client';

export const SIGN_UP_USER = gql`
  mutation signupUser($email: String!, $password: String!, $superuser: Boolean) {
    signupUser(data: { email: $email, password: $password, superuser: $superuser }) {
      id
      email
      superuser
    }
  }
`;

export const VALIDATE_USER_CREDENTIALS = gql`
  query validate($email: String!, $password: String!) {
    validateUserCredentials(email: $email, password: $password) {
      id
      superuser
    }
  }
`;
