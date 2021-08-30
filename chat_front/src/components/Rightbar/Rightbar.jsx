import './rightbar.scss';
import OnlineFriends from '../OnlineFriends/OnlineFriends';
import { Users } from '../../testData';

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User info title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">City:</span>
            <span className="rightbarInfoItemValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">From:</span>
            <span className="rightbarInfoItemValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">Relation:</span>
            <span className="rightbarInfoItemValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowings-item">
            <img src="/assets/person/1.jpeg" className="following-img" alt="" />
            <span className="following-name">Jhon Karter</span>
          </div>
          <div className="rightbarFollowings-item">
            <img src="/assets/person/2.jpeg" className="following-img" alt="" />
            <span className="following-name">Jhon Karter</span>
          </div>
          <div className="rightbarFollowings-item">
            <img src="/assets/person/3.jpeg" className="following-img" alt="" />
            <span className="following-name">Jhon Karter</span>
          </div>
          <div className="rightbarFollowings-item">
            <img src="/assets/person/4.jpeg" className="following-img" alt="" />
            <span className="following-name">Jhon Karter</span>
          </div>
          <div className="rightbarFollowings-item">
            <img src="/assets/person/5.jpeg" className="following-img" alt="" />
            <span className="following-name">Jhon Karter</span>
          </div>
          <div className="rightbarFollowings-item">
            <img src="/assets/person/6.jpeg" className="following-img" alt="" />
            <span className="following-name">Jhon Karter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        { profile ? <ProfileRightbar /> :  <HomeRightbar /> }
      </div>
    </div>
  )
};

export default Rightbar;
