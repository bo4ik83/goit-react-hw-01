import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "./data/transactions.json";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import styles from "../components/TransactionHistory/TransactionHistory.module.css";

const App = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <div className={styles.app}>
          <h1 className={styles.title}>Friend List</h1>
          <FriendList friends={friends} />
        </div>
        <h1 className={styles.transactionTitle}>Transaction History</h1>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
