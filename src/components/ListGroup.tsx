import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ListGroup() {
  // Hook
  const [items, addClass] = useState([
    { nameOfClass: "Algebra", gradeInClass: 80 },
  ]);
  const [input, inputState] = useState("");
  const [response, setResponse] = useState("");

  function handleInput(event) {
    inputState(event.target.value);
  }

  function addToList() {
    if (input !== "" && items.length < 10) {
      const newList = items.concat({ nameOfClass: input, gradeInClass: 0 });
      inputState("");
      addClass(newList);
    }
  }
  function sendGrades() {
    if (items.length > 0) {
      inputState("");
      let temp = "";
      items.forEach((item) => {
        temp += item.nameOfClass + ": ";
        temp += item.gradeInClass + " ";
      });

      addClass([]);
      setResponse(temp);
    }
  }

  function changeGrade(index: number, event) {
    const value = event.target.value;
    const newClasses = [...items];
    newClasses[index].gradeInClass = value;
    addClass(newClasses);
  }
  return (
    <>
      {response === "" && (
        <>
          <form onSubmit={sendGrades}>
            <ul className="list-group">
              {items.map((item, index) => (
                <li
                  key={item.nameOfClass}
                  className="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => {
                    console.log("The number clicked was: ");
                  }}
                >
                  <p className="fs-12">{item.nameOfClass} grade: </p>
                  <input
                    type="text"
                    required
                    value={item.gradeInClass}
                    onChange={(event) => changeGrade(index, event)}
                    className="form-control"
                  ></input>
                </li>
              ))}
            </ul>
            {items.length > 0 && (
              <button className="btn btn-success" type="submit">
                Submit Grades
              </button>
            )}
          </form>
          <button onClick={addToList} className="btn btn-primary">
            Click This to add class!
          </button>
          <input type="text" value={input} onChange={handleInput}></input>
          <br></br>
          <button
            className="btn btn-danger"
            onClick={() => {
              addClass(items.slice(0, -1));
            }}
          >
            Click This to delete bottom class!
          </button>
        </>
      )}
      {response !== "" && <h1>{response}</h1>}
    </>
  );
}

export default ListGroup;
