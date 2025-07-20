/* eslint-disable prettier/prettier */
import { gql } from "graphql-request";

export const GET_PRODUCT_ID = gql`
  query {
    product{
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;
