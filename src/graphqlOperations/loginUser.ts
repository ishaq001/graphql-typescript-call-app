import gql from 'graphql-tag'

// login(input: LoginInput!): AuthResponseType!

export const LOGIN_USER = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        username
      }
      access_token
    }
  }
`
