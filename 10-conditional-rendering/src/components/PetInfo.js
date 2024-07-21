function PetInfo(props) {
  console.log(props);
  const { animal, age, hasPet } = props;
  // const text = hasPet
  //   ? `My ${animal} is ${age} years old`
  //   : "I don't have an animal";

  return (
    <h1>
      {hasPet ? `My ${animal} is ${age} years old` : "I don't have an animal"}
      {/* {text} */}
      {/* My {props.animal} is {props.age} years old */}
    </h1>
  );
}

export default PetInfo;
