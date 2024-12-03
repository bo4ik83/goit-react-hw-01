import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import userData from "../userData.json";
import friends from "../friends.json";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingLeft: "500px",
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
    </div>
  );
};

export default App;
