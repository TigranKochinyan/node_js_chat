import './onlineFriends.scss';

const OnlineFriends = ({ user }) => {
  console.log('user', user);
  return (
    <li className="rightbar-wrapper_list-item">
      <div className="rightbar-wrapper_list-item_div">
        <img className="rightbar-wrapper_list-item_div-img" src={user.profilePicture} alt="" />
        <span className="rightbar-wrapper_list-item_div-online"></span>
      </div>
      <span className="rightbar-wrapper_list-item_username">{user.username}</span>
    </li>
  )
};

export default OnlineFriends;
