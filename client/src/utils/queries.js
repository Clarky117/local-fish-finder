import { gql } from '@apollo/client';

export const GET_ALL_FISH_QUERY = gql`
    query allfish{
        allfish{        
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
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      fishesForSale{
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
  }`