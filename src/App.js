import "./App.css";
import { useState, useEffect } from "react";

import Student from "./Student/Student";
//import NumberList from "./AdicionarId";

function App() {
  const [Students, setStudents] = useState([]);
  const [result, setresult] = useState([]);
  const [screenStudents, setScreenStudents] = useState(false);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response.filter((item) => item.image)))
      .catch((err) => console.log(err));
  }, []);

  function SortStudents() {
    let tri = [Students[Math.floor(Math.random() * Students.length)]];
    let two = Students.filter((item) => item.house !== tri[0].house);
    tri.push(two[Math.floor(Math.random() * two.length)]);
    let one = Students.filter(
      (item) => item.house !== tri[0].house && item.house !== tri[1].house
    );
    tri.push(one[Math.floor(Math.random() * one.length)]);

    setScreenStudents(true);
    setresult([...tri]);
  }

  function reset() {
    setresult([]);

    setScreenStudents(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Torneio Tribruxo</h1>

        <span>
          {screenStudents === false ? (
            <div>
              <button className="w3-btn" onClick={SortStudents}>
                Clique aqui para Sortear
              </button>
            </div>
          ) : (
            <div>
              <button className="w3-btn" onClick={reset}>
                Reset
              </button>
            </div>
          )}
        </span>
        <Student student={result} />
      </header>
    </div>
  );
}

export default App;
