import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
function NavBar() {
  const [hiddenText, changeHiddenText] = useState("Alpha Sig Grades");
  let isAlphaSig = true;

  function changeHiddenLol() {
    if (isAlphaSig) {
      const temp = "Yeah";
      changeHiddenText(temp);
      isAlphaSig = false;
    } else {
      const temp = "Alpha Sig Grades";
      changeHiddenText(temp);
      isAlphaSig = true;
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container">
          <p className="navbar-brand" onClick={changeHiddenLol}>
            {hiddenText}
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
