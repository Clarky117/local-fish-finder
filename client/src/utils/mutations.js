import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FISH = gql`
mutation addFish($fishname: String!, $username: String!, $price: Int!, $size: Int!, $quantity: Int!, $location: String!) {
  addFish(fishname: $fishname, username: $username, price: $price, size: $size, quantity: $quantity, location: $location) {
    _id
    fishname
    username
    price
    size
    quantity
    location
    createdAt
  }
}
`;