import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "./data/transactions.json"
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingLeft: "350px",
        gap: "30px",
        textAlign: "center",
      }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <h1>Transaction History</h1>
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;
