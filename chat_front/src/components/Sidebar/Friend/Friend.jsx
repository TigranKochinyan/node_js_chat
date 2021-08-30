import './friend.scss';

const Friends = ({ friend }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebar-wrapper_friendsList-item">
      <img src={PF + friend.profilePicture} alt="" className="sidebar-wrapper_friendsList-item_img" />
      <span className="sidebar-wrapper_friendsList-item_name">{friend.username}</span>
    </li>
  )
};

export default Friends;
