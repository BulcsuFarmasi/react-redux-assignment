import { ADD_PERSON, DELETE_PERSON } from "./actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.name,
        age: action.age
      };
      console.log(newPerson);

      return {
        persons: state.persons.concat(newPerson)
      };
    case DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.personId)
      };
  }
  return state;
};

export default reducer;
