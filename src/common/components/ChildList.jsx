import React from "react";

export default function ChildList({ person }) {
  return (
    <p>
      I am {person.name}. I am {person.age} years old. I know {person.skill}
    </p>
  );
}
