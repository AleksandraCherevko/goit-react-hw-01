import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? "Online" : "Offline";
  const statusColor = clsx(isOnline ? css.onlineColor : css.offlineColor);
  return (
    <>
      <div className={css.card}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={statusColor}>{statusText}</p>
      </div>
    </>
  );
};

export default FriendListItem;
