/* eslint-disable prettier/prettier */
// src/graphql/queries.ts
import { gql } from "graphql-tag";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      title
      price
      images
      category {
        id
        name
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      price
      description
      images
      category {
        id
        name
      }
    }
  }
`;
