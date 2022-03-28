import { gql } from 'graphql-request';

export const SUBSCRIBE_NEWSLETTER_MUTATION = gql`
  mutation subscribeNewsletter($email: String!) {
    subscribeNewsletter(email: $email) {
      subscribed
    }
  }
`;
