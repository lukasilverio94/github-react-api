import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// Components
import SearchUser from "./components/SearchUser";
import UserInfo from "./components/UserInfo";

function App() {
  // States
  const [defaultUser, setDefaultUser] = useState("lukasilverio94");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // Handle Search Function (Fetch Data)
  const handleSearch = async (username) => {
    setIsLoading(true);
    try {
      const [userDataResponse, reposResponse] = await Promise.all([
        axios.get(
          `http://api.github.com/users/${username}?client_id=${
            import.meta.env.VITE_GITHUB_ID
          }&client_secret=${import.meta.env.VITE_GITHUB_KEY}&sort=created`
        ),
        axios.get(
          `http://api.github.com/users/${username}/repos?client_id=${
            import.meta.env.VITE_GITHUB_ID
          }&client_secret=${import.meta.env.VITE_GITHUB_KEY}&sort=created`
        ),
      ]);

      setUserData(userDataResponse.data);
      setRepos(reposResponse.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  // When component mounts, show default user
  useEffect(() => {
    handleSearch(defaultUser);
  }, []);
  return (
    <div>
      <SearchUser onSearch={handleSearch} />
      {/* Is loading while waiting response */}
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <UserInfo userData={userData} repos={repos} />
      ) : (
        <p className="text-danger">No user data available</p>
      )}
    </div>
  );
}

export default App;
