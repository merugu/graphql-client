import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getDepartment, getPersonsQuery, addPersonMutation } from '../queries/queries';



class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            sex: '',
            contact: '',
            departmentID: ''
        };
    }
    displayPersons() {
        var data = this.props.getDepartment;
        if(data.loading) {
            return(<option disabled>Loading Departments...</option>) 
        }
        return data.departments.map(department => {
            return(<option key={department.id} value={department.id}>{ department.departmentName }</option>)
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addPersonMutation({
            variables: {
                name: this.state.name,
                age: parseInt(this.state.age),
                sex: this.state.sex,
                contact: this.state.contact,
                departmentID: this.state.departmentID,
            },
            refetchQueries: [{query: getPersonsQuery}]
        });
    } 
    render() {
        return (
            <form id="add-person" onSubmit={this.submitForm.bind(this)}>
    <div className="field">
        <label>Person Name:</label>
        <input type="text" onChange = {(e) => this.setState({name: e.target.value})}/>
    </div>

    <div className="field">
        <label>Age:</label>
        <input type="text" onChange = {(e) => this.setState({age: e.target.value})}/>
    </div>

    <div className="field">
        <label>Sex:</label>
        <input type="text" onChange = {(e) => this.setState({sex: e.target.value})}/>
    </div>

    <div className="field">
        <label>Contact:</label>
        <input type="text" onChange = {(e) => this.setState({contact: e.target.value})}/>
    </div>

    <div className="field">
        <label>Department:</label>
        <select onChange = { (e) => this.setState({departmentID: e.target.value})}>
            <option>Select Department</option>
            {this.displayPersons()}
        </select>
    </div>

    <button>Add Person</button>

</form>
        );
    }
}

export default compose(
    graphql(getDepartment, {name: "getDepartment"}),
    graphql(addPersonMutation, {name: "addPersonMutation"}),
)(AddPerson);