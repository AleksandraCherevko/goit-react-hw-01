import "./App.css";
import Profile from "./assets/components/Profile/Profile.jsx";
import userData from "./assets/components/Profile/Profile.json";

function App() {
  return (
    <div>
      {userData.map((userData) => {
        return <Profile {...userData} />;
      })}
    </div>
  );
}

export default App;
