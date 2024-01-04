import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Trip from "./components/Trip";
import "./App.css";

function App() {
  const [trips, setTrips] = useState([]);
  const [userInput, setUserInput] = useState("");

  console.log(userInput);
  console.log(trips);

  useEffect(() => {
    getTrips();
  }, []);

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
    />
  ));

  return (
    <div className="App">
      <Input
        userInput={userInput}
        setUserInput={setUserInput}
        getTrips={getTrips}
      />
      {tripsElements}
    </div>
  );
}

export default App;
