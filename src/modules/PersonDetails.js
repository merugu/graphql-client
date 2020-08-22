import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPersonQuery } from '../queries/queries';

class PersonDetails extends Component {
        displayPersonDetails(){
            const { person } = this.props.data;
            if(person) {
                return (
                    <div>
                        <h2>{person.name}</h2>
                        <p>{person.age}</p>
                        <p>{person.sex}</p>
                        <p>{person.contact}</p>
                        <p>{person.department.id}</p>
                        <p>{person.department.departmentName}</p>                  
                    </div>
                )
            }
            return (
            <div>No person selected</div>
            )
        }
        render() {
        return (
            <div id="person-details">
               { this.displayPersonDetails() }
            </div>
        );
    }
}

export default graphql(getPersonQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.personId
            }
        }
    }
})(PersonDetails);