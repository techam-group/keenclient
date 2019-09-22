import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
  mutation (
    $email: String!
    $password: String!
  ) {
    loginUser (data: {
      email: $email
      password: $password
    }) {
      token
    }
  }
`

export const ADD_NEW_USER = gql`
  mutation (
    $firstName: String!
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
    })
  }
`

export const VERIFY_EMAIL = gql`
  mutation ($emailToken: String!) {
    verifyEmail (emailToken: $emailToken)
  }
`

export const RESEND_EMAIL_VERIFICATION = gql`
  query ($email: String!) {
    resendEmailVerification (email: $email)
  }
`