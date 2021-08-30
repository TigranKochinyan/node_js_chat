import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';
import Rightbar from '../../components/Rightbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-continer">
       <Sidebar />
       <Feed />
       <Rightbar />
      </div>
    </div>
  )
}

export default Home;