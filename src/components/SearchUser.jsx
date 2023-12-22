import { useState } from "react";

export default function SearchUser({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (!username) {
      alert("Please enter a username");
      return;
    }
    onSearch(username);
  };
  return (
    <div className="input-group mb-3 row">
      <h2 className="mb-3 mt-0">Search Github Profile: </h2>
      <input
        type="text"
        placeholder="Enter Github username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control col-12 mb-2"
      />
      <button className="btn btn-dark col-12" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
