import friends from "./friends.json";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendsList = () => {
  return (
    <div className={css.cardList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            key={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendListItem>
        );
      })}
    </div>
  );
};

export default FriendsList;
