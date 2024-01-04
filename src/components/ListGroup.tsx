import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ListGroup() {
  // Hook
  const [items, addClass] = useState([
    { nameOfClass: "Algebra", gradeInClass: 80 },
  ]);
  const [input, inputState] = useState("");
  const [response, setResponse] = useState("");

  const [average, changeAverage] = useState(80);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    inputState(event.target.value);
  }

  function handleAverage() {
    if (items.length === 0) {
      changeAverage(0);
      return;
    }
    var sum = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].gradeInClass) {
        sum += Number(items[i].gradeInClass);
      }
    }

    console.log(sum);
    const newAverage = sum / items.length;
    console.log(newAverage);

    changeAverage(newAverage);
  }

  function addToList() {
    if (input !== "" && items.length < 10) {
      const newList = items.concat({ nameOfClass: input, gradeInClass: 0 });
      inputState("");
      addClass(newList);
      handleAverage();
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
      handleAverage();
    }
  }

  function changeGrade(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let value = event.target.value;

    if (value.charAt(0) == "0") {
      event.target.value = value.slice(1);
    }
    const newClasses = [...items];
    newClasses[index].gradeInClass = Number(value);
    addClass(newClasses);
    handleAverage();
  }
  return (
    <>
      {response === "" && (
        <>
          <form onSubmit={sendGrades}>
            <ul className="list-group">
              {items.map((item, index) => (
                <li
                  key={item.nameOfClass + index}
                  className="list-group-item list-group-item-action list-group-item-primary"
                  onClick={() => {
                    console.log("The number clicked was: ");
                  }}
                >
                  <p className="fs-12">{item.nameOfClass} grade: </p>
                  <input
                    type="number"
                    max={100}
                    min={0}
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
          <button
            className="btn btn-danger"
            onClick={() => {
              addClass(items.slice(0, -1));
            }}
          >
            Delete Class
          </button>
          <br></br>
          <button onClick={addToList} className="btn btn-primary">
            Add Class
          </button>

          <input type="text" value={input} onChange={handleInput}></input>

          {average > 0 && average < 10 && (
            <img src="/lonelyHorse.jpg" className="img-thumbnail"></img>
          )}
          {average >= 10 && average < 20 && (
            <img src="/sadLake.jpg" className="img-thumbnail"></img>
          )}
          {average >= 20 && average < 30 && (
            <img src="/academicSkillIssue.jpg" className="img-thumbnail"></img>
          )}
          {average >= 30 && average < 40 && (
            <img src="/parade.jpg" className="img-thumbnail"></img>
          )}
          {average >= 40 && average < 50 && (
            <img src="/teylorinitiation.jpg" className="img-thumbnail"></img>
          )}
          {average >= 50 && average < 60 && (
            <img src="/miketaregta.jpg" className="img-thumbnail"></img>
          )}

          {average >= 60 && average < 70 && (
            <img src="/miketalogta.jpg" className="img-thumbnail"></img>
          )}
          {average >= 70 && average < 80 && (
            <img src="/883Pumpkin.jpg" className="img-thumbnail"></img>
          )}
          {average >= 80 && average < 90 && (
            <img src="/alphasigfootball.jpg" className="img-thumbnail"></img>
          )}
          {average >= 90 && average < 100 && (
            <img src="/chilis.jpg" className="img-thumbnail"></img>
          )}
          {average >= 100 && (
            <img src="/alphaSig2023.jpg" className="img-thumbnail"></img>
          )}
        </>
      )}
      {response !== "" && <h1>{response}</h1>}
    </>
  );
}

export default ListGroup;
