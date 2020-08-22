import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getPersonsQuery } from '../queries/queries'
import PersonDetails from './PersonDetails';


class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null 
        }
    }
    displayPersons() {
        var data = this.props.data;
        if(data.loading) {
            return <div>Loading persons...</div>
        }
        return data.persons.map(person => {
            return (
                <li key={person.id} onClick={(e) => {this.setState({selected: person.id})}}><b>{ person.name}</b></li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul id="persons">
                    {this.displayPersons()}
                </ul>
                <PersonDetails personId = {this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getPersonsQuery)(Persons);