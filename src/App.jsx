import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./components/Profile/Profile.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      {userData.map((userData) => {
        return (
          <>
            <Profile {...userData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
          </>
        );
      })}
    </div>
  );
}

export default App;
