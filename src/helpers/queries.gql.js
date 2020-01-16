import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
  mutation (
    $usernameOrEmail: String!
    $password: String!
  ) {
    loginUser (data: {
      usernameOrEmail: $usernameOrEmail
      password: $password
    }) {
      token
    }
  }
`;

export const ADD_NEW_USER = gql`
  mutation (
    $firstName: String
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser (data: {
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    }) {
        token
    }
  }
`;

export const VERIFY_EMAIL = gql`
  mutation ($emailToken: String!) {
    verifyEmail (emailToken: $emailToken)
  }
`;

export const RESEND_EMAIL_VERIFICATION = gql`
  query ($email: String!) {
    resendEmailVerification (email: $email)
  }
`;

export const CREATE_BLOG_POST = gql`
    mutation (
        $title: String!
        $body: String
        $category: String
        $image: String
        $isPublished: Boolean
    ) {
        addPost (data: {
            title: $title
            body: $body
            category: $category
            image: $image
            isPublished: $isPublished
        })
    }
`;
