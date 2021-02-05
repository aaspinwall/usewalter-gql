import { gql, useQuery } from '@apollo/client';

export const CREATE_RESIDENT_ACCOUNT = gql`
  mutation createResidentAccount(
    $unit: Int!
    $name: String!
    $telephone: String
    $timeForNotif: String
    $email: String!
    $password: String!
    $superuser: Boolean
  ) {
    signupUser(data: { email: $email, password: $password, superuser: $superuser }) {
      id
      email
      superuser
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
  mutation createOneResident($unit: Int!, $name: String!, $telephone: String, $timeForNotif: String, $email: String!) {
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

export const GET_RESIDENT_BY_ID = gql`
  query getResident($id: Int!) {
    getResidentByUserID(id: $id) {
      email
      superuser
      resident {
        unit
        name
        telephone
        timeForNotif
        package {
          id
          delivered
          description
        }
      }
    }
  }
`;
