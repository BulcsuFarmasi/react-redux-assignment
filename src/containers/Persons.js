import React, { Component } from "react";

import { connect } from "react-redux";

import { ADD_PERSON, DELETE_PERSON } from "../store/actions";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  personDeletedHandler = personId => {};

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAdded} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDeleted(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    personAdded: (name, age) => dispatch({ type: ADD_PERSON, name, age }),
    personDeleted: personId => dispatch({ type: DELETE_PERSON, personId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
