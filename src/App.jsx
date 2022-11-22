import { useEffect, useState } from "react";
import "./App.css";
import From from "./components/form/Form";
import Table from "./components/table/Table";

function App() {
  const [data, setData] = useState([]);

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
