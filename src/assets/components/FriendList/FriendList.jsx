import friends from "./friends.json";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendsList = () => {
  return (
    <div>
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
    // <ul>
    //   {/* Кількість li залежить від кількості об'єктів в масиві */}
    //   <li>
    //     <FriendListItem />
    //   </li>
    // </ul>
  );
};

export default FriendsList;
