import "./App.css";
import Profile from "./assets/components/Profile/Profile.jsx";
import userData from "./assets/components/Profile/Profile.json";
import FriendList from "./assets/components/FriendList/FriendList.jsx";
import friends from "./assets/components/FriendList/friends.json";
import TransactionHistory from "./assets/components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./assets/components/TransactionHistory/transactions.json";

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
