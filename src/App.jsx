import { useEffect, useState } from "react";
import "./App.css";
import From from "./components/form/Form";
import Table from "./components/table/Table";
import { getUserData } from "./firebase/firebase";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <From setData={setData} data={data} />
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;
