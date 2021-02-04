import { gql, useQuery } from "@apollo/client";

export const CREATE_PACKAGE = gql`
  mutation addPackage($description: String!, $unit: Int!) {
    createOnePackage(
      data: {
        description: $description
        resident: { connect: { unit: $unit } }
      }
    ) {
      id
      delivered
      description
      unit
    }
  }
`;
