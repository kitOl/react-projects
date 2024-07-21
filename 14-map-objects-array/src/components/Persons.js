import persons from "../data/persons";
import Person from "./Person";

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        // const { id, firstName, lastName, email, img } = person;
        return (
          <Person
            key={person.id}
            {...person}
            // key={id}
            // id={id}
            // firstName={firstName}
            // lastName={lastName}
            // email={email}
            // img={img}
          />
        );
      })}
    </div>
  );
}

export default Persons;
