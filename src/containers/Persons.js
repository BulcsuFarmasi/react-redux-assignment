import React, { Component } from "react";

import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  personAddedHandler = () => {};

  personDeletedHandler = personId => {};

  render() {
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeletedHandler(person.id)}
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

export default connect(mapStateToProps)(Persons);
