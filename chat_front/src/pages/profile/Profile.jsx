import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';
import Rightbar from '../../components/Rightbar';
import './profile.scss';

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile-container">
       <Sidebar />
       <div className="profile-container_right">
          <div className="profile-container_right-top">
            <div className="profile-container_right-top_cover">
              <img
                className="profile-container_right-top_coverPic"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profile-container_right-top_profilePic"
                src="/assets/person/7.jpeg"
                alt=""
              />
              <div className="profile-container_right-top_cover-info">
                <h4 className="profile-container_right-top_cover-info_name">Name Surname</h4>
                <span className="profile-container_right-top_cover-info_desc">Hello its me</span>
              </div>
            </div>
          </div>
          <div className="profile-container_right-bottom">
            <Feed />
            <Rightbar />
          </div>
       </div>
      </div>
    </div>
  )
}

export default Profile;
