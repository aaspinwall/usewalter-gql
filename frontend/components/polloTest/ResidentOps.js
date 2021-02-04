import { gql, useQuery } from "@apollo/client";

export const CREATE_RESIDENT_ACCOUNT = gql`
  mutation createResidentAccount(
    $unit: Int!
    $name: String!
    $telephone: String
    $timeForNotif: String
    $email: String!
    $password: String!
    $super: Boolean
  ) {
    signupUser(data: { email: $email, password: $password, super: $super }) {
      id
      email
      super
    }
    createOneResident(
      data: {
        unit: $unit
        name: $name
        telephone: $telephone
        timeForNotif: $timeForNotif
        user: { connect: { email: $email } }
      }
    ) {
      email
      unit
    }
  }
`;

export const CREATE_RESIDENT = gql`
  mutation createOneResident(
    $unit: Int!
    $name: String!
    $telephone: String
    $timeForNotif: String
    $email: String!
  ) {
    createOneResident(
      data: {
        unit: $unit
        name: $name
        telephone: $telephone
        timeForNotif: $timeForNotif
        user: { connect: { email: $email } }
      }
    ) {
      email
      unit
    }
  }
`;

export const GET_RESULTS = gql`
  query roomResults($id: String!) {
    roomByID(id: $id) {
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
      code
      success
      message
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
