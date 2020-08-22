import { gql } from 'apollo-boost';


const getPersonsQuery = gql`
{
    persons{
      id
      name
      age
      sex
      contact
    }
  }
`

const getPersonQuery = gql`
query($id: ID) {
    person(id: $id){
      id
      name
      age
      sex
      contact
      department {
        id
        departmentName
      } 
    }
}
`
const getDepartment = gql`
{
    departments {
      id
      departmentName
    }
  }
`

const addPersonMutation =gql`
mutation($name: String!, $age: Int!, $sex: String!, $contact: String!, $departmentID: String!) {
    addPerson(name: $name, age: $age, sex: $sex, contact: $contact, departmentID: $departmentID) {
        name
        id
    }
}
`
export {getPersonsQuery, getPersonQuery, getDepartment, addPersonMutation};