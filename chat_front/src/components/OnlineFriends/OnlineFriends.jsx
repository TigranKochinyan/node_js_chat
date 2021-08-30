import './onlineFriends.scss';

const OnlineFriends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbar-wrapper_list-item">
      <div className="rightbar-wrapper_list-item_div">
        <img className="rightbar-wrapper_list-item_div-img" src={PF + user.profilePicture} alt="" />
        <span className="rightbar-wrapper_list-item_div-online"></span>
      </div>
      <span className="rightbar-wrapper_list-item_username">{user.username}</span>
    </li>
  )
};

export default OnlineFriends;
