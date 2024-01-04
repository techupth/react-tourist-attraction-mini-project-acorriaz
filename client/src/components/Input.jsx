export default function Input({ userInput, setUserInput, getTrips }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    getTrips();
  };

  return (
    <>
      <h1>เที่ยวไหนดี</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">ค้นหาที่เที่ยว</label>
        <input
          id="search"
          placeholder="หาที่เที่ยวแล้วไปกัน"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
    </>
  );
}
