import './rightbar.scss';
import OnlineFriends from '../OnlineFriends/OnlineFriends';
import { Users } from '../../testData';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="rightbar-wrapper_continer">
          <img 
            className="rightbar-wrapper_continer-img"
            src="/assets/gift.png"
            alt=""
          />
          <span className="rightbar-wrapper_continer-text">
            <b>Pola Foster</b>
            and
            <b>3 other friends</b>
            have a birthday.
          </span>
        </div>
        <img className="rightbar-wrapper_img" src="/assets/ad.png" alt="" />
        <h4 className="rightbar-wrapper_title">Online Friends</h4>
        <ul className="rightbar-wrapper_list">
          {
            Users.map((user) => (
              <OnlineFriends key={user.id} user={user} />
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default Rightbar;
