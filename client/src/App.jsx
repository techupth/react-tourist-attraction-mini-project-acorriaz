import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Trip from "./components/Trip";
import "./App.css";

function App() {
  const [trips, setTrips] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getTrips();
  }, [userInput]);

  const getTrips = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${userInput}`
    );
    setTrips(() => result.data.data);
  };

  const tripsElements = trips.map((trip) => (
    <Trip
      key={trip.eId}
      title={trip.title}
      tags={trip.tags}
      url={trip.url}
      photos={trip.photos}
      description={trip.description}
      getTrips={getTrips}
      setUserInput={setUserInput}
    />
  ));

  return (
    <div className="app">
      <Input
        userInput={userInput}
        setUserInput={setUserInput}
        getTrips={getTrips}
      />
      <div className="trips--container">{tripsElements}</div>
    </div>
  );
}

export default App;
