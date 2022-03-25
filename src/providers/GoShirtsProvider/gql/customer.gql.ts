import { gql } from 'graphql-request';

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation changePwdCustomer($userId: String!, $newPassword: String!) {
    changePassword(data: { userId: $userId, newPassword: $newPassword }) {
      newPassword
    }
  }
`;
