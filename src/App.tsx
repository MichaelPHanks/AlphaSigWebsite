import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavigationBar";
import "./style.css";
function App() {
  const containerStyle = {
    backgroundColor: "#555555",
    padding: 10,
    borderRadius: 30,
  };
  const containerStyleLeft = {
    backgroundColor: "#770202",
    padding: 10,
    borderRadius: 30,
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="mainDiv">
        <div className="rightPage"> Hello </div>
        <div className="leftPage">
          <div className="card" style={containerStyleLeft}>
            <div className="container mt-5">
              <ListGroup></ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
