import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavigationBar";
import "./style.css";
import PhotoForm from "./components/PhotoForm";
import Footer from "./components/Footer";
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
        <div className="rightPage">
          <div className="card" style={containerStyle}>
            <div className="container mt-5">
              <h1>Photo Of Canvas</h1>
              <PhotoForm></PhotoForm>
            </div>
          </div>
        </div>
        <div className="leftPage">
          <div className="card" style={containerStyleLeft}>
            <div className="container mt-5">
              <h1>Manually input grades:</h1>
              <ListGroup></ListGroup>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
