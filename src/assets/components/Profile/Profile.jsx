import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({
  key,
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.photoWrap}>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="150"
          />
          <p className={css.username}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <div className={css.statsWrap}>
          <ul className={css.statsList}>
            <li className={css.statsItem}>
              <span className={css.statsText}>Followers</span>
              <span className={css.statsCount}>{followers}</span>
            </li>
            <li className={css.statsItem}>
              <span className={css.statsText}>Views</span>
              <span className={css.statsCount}>{views}</span>
            </li>
            <li className={css.statsItem}>
              <span className={css.statsText}>Likes</span>
              <span className={css.statsCount}>{likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
