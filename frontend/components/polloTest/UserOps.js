import { gql, useQuery } from "@apollo/client";

export const SIGN_UP_USER = gql`
  mutation signupUser(
    $email: String!
    $password: String!
    $superuser: Boolean
  ) {
    signupUser(
      data: { email: $email, password: $password, superuser: $superuser }
    ) {
      id
      email
      superuser
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
