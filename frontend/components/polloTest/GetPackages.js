import { gql, useQuery } from "@apollo/client";

export const GET_ALL_PACKAGES = gql`
  query getAllPackages {
    packages {
      id
      delivered
      description
    }
  }
`;

export const GET_PACKAGE_BY_ID = gql`
  query getPackageByID($id: Int!) {
    package(where: { id: $id }) {
      id
      delivered
      description
    }
  }
`;

export const ADD_VOTER_DATA = gql`
  mutation addVoterData($id: String!, $name: String!, $option: String!) {
    addVoterData(voterData: { name: $name, option: $option }, roomID: $id) {
      roomData {
        id
        name
        timeLimit
        voteOptions
        voters {
          name
          voteData
        }
      }
      option
      code
      success
      message
    }
  }
`;