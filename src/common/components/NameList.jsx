import React from "react";
import ChildList from "./ChildList";

export default function NameList() {
  const array1 = [1, 4, 9, 16];
  // Pass a function to map
  const map1 = array1.map((x) => x * 2);

  console.log(map1);
  // Expected output: Array [2, 8, 18, 32]
  //   in  our current example map method is executed for four times to complete our four iterations
  //this is our concept of using list rendering in  JS

  const names = ["Bruce", "Clark", "Diana"];

  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 25,
      skill: "react",
    },
    {
      id: 2,
      name: "Clark",
      age: 30,
      skill: "angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 23,
      skill: "vue",
    },
  ];

  return (
    // One of the most important thing about react is that it heavily relies on javascript and does not introduce its own methods to render and manipulate data
    // What if we want to render the list of elements (like we can say that iterate each value of array over an  html tag) in react
    // this thing is achieved by map method which is present in the JS
    // map methods accept a function as an argument
    // in that function there is parameter fat arrow syntax and the function body, parameter should be of any name but it is recommended that names of the params should be relevant to the code
    //The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

    <div>
      {/* <p>{names[0]}</p>
      <p>{names[1]}</p>
      <p>{names[2]}</p> */}
      {/* the above approach is not the right solution , the proper solution is the using of map method*/}
      {/* map method is the javascript code which needs to be executed  in JSX thats why we do it inside curly braces  */}
      {names.map((name, index) => (
        <p key={index}>
          {index}
          {name}
        </p>
      ))}
      {/* {persons.map((person) => (
        <p>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </p>
      ))} */}
      {/* the better way to write the clean code is to write the html in separate
      component and data is passed down that component as mentioned in the
      example below */}
      {persons.map((person) => (
        <ChildList key={person.id} person={person} />
      ))}
      {/* there is the warning or you can say error which is that each child in the array should have unique key.*/}
      {/* this error is removed by adding a unique key prop in the parent HTML of the map */}
      {/* key is the unique prop which you are hundred percent sure that this value is  not repeating in the list  */}
      {/* A 'key'  is the special string which we do need to add when creating the list of element */}
      {/* key gives the element a stable identity */}
      {/* key helps react identifying which item in the list has changed or added or removed and place a crucial role in handling UI updates efficiently.    */}
      {/* when there is list of items in the array we use the index as key */}
      {/* index starts form zero and it increases with each iteration */}
      {/* index is passed as second parameter in the arrow function and is used as value for key prop */}
      {/* important points */}
      {/* when to use index as key */}
      {/* the items in the list do not have any unique value */}
      {/* the list is static and its value will never be changed */}
      {/* the list will neither be ordered nor be filtered */}
      {/* otherwise it will create dizastour issues which */}
    </div>
  );
}
