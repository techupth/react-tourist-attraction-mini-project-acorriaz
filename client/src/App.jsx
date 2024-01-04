import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    const result = await axios.get("http://localhost:4001/trips?keywords=");
    setFetchData(() => result.data.data);
  };

  console.log(fetchData);

  return <div className="App">{/* Start coding here */}</div>;
}

export default App;
