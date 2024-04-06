import logo from "./logo.svg";
import "./App.css";
import ESGForm from "./components/ESGForm";

function App() {
  initLocalData();
  return (
    <div className="App">
      <ESGForm />
    </div>
  );
}

export default App;

function initLocalData() {
  const data = localStorage.getItem("data");
  if (data === null) {
    let data = require("./mockData.json");
    localStorage.setItem("data", JSON.stringify(data));
  }
}
