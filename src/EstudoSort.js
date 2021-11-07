/*
tela 1 - 
        Button Sortear

tela 2 - 
        Cards 
        Button reset


Componentes:
- App
    useStates/useEffect;
    SortStudents
    reset

- Card
      redenriza os atributos do json

- Student
      map
*/
import { useEffect, useState } from "react";
import StartButton from "../StartButton/StartButton";

function RandomFilter() {
  const [person, setPerson] = useState([]);
  const [number, setNumber] = useState(
    "Clique no botão para encontrar os Feiticeiros!"
  );

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setPerson(response))
      .catch((err) => console.log(err));
  }, []);
  //console.log(person);

  function InsertId() {
    const arr = [];

    for (let i = 0; i < person.length; i++) {
      arr.push(person[i]["name"]);
    }

    const NameList = Object.assign(...[arr]);

    

    return NameList;
  }

  const listItems = InsertId().map((name, index) => (
    <li key={index}>{name}</li>
  ));

  function Sort() {
    setNumber(Math.floor(Math.random() * InsertId().length) + 1);
  }

  function Winner(InsertId) {
    for (var key in InsertId) return InsertId[number];
  }

  return (
    <div>
      <div style={{ color: "red" }}>
        <p>{number}</p>
        <p>{Winner(InsertId())}</p>

        <button onClick={Sort}>Sortear </button>
      </div>

      <ul>
        {listItems}
      </ul>
      <StartButton sort={number}/>
    </div>
  );
}

export default RandomFilter;
import { useEffect, useState } from "react";
import StartButton from "../StartButton/StartButton";

function RandomFilter() {
  const [person, setPerson] = useState([]);
  const [number, setNumber] = useState(
    "Clique no botão para encontrar os Feiticeiros!"
  );

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setPerson(response))
      .catch((err) => console.log(err));
  }, []);
  //console.log(person);

  function InsertId() {
    const arr = [];

    for (let i = 0; i < person.length; i++) {
      arr.push(person[i]["name"]);
    }

    const NameList = Object.assign(...[arr]);

    

    return NameList;
  }

  const listItems = InsertId().map((name, index) => (
    <li key={index}>{name}</li>
  ));

  function Sort() {
    setNumber(Math.floor(Math.random() * InsertId().length) + 1);
  }

  function Winner(InsertId) {
    for (var key in InsertId) return InsertId[number];
  }

  return (
    <div>
      <div style={{ color: "red" }}>
        <p>{number}</p>
        <p>{Winner(InsertId())}</p>

        <button onClick={Sort}>Sortear </button>
      </div>

      <ul>
        {listItems}
      </ul>
      <StartButton sort={number}/>
    </div>
  );
}

export default RandomFilter;
