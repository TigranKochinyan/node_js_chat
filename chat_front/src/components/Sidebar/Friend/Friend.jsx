import './friend.scss';

const Friends = ({ friend }) => {
  return (
    <li className="sidebar-wrapper_friendsList-item">
      <img src={friend.profilePicture} alt="" className="sidebar-wrapper_friendsList-item_img" />
      <span className="sidebar-wrapper_friendsList-item_name">{friend.username}</span>
    </li>
  )
};

export default Friends;
