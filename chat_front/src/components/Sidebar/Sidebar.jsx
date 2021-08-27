import './sidebar.scss';
import { 
  RssFeed,
  WorkOutline,
  HelpOutline,
  Event,
  School,
  Group,
  PlayCircleFilledOutlined,
  Bookmark
} from '@material-ui/icons';
import Friend from './Friend';
import { Users } from '../../testData';

const sidebarSubmenu = [
  {
    id: 1,
    icon: <RssFeed className="sidebar-wrapper_list-icon" />,
    title: 'Feed'
  },
  {
    id: 2,
    icon: <PlayCircleFilledOutlined className="sidebar-wrapper_list-icon" />,
    title: 'Videos'
  },
  {
    id: 3,
    icon: <Group className="sidebar-wrapper_list-icon" />,
    title: 'Groups'
  },
  {
    id: 4,
    icon: <Bookmark className="sidebar-wrapper_list-icon" />,
    title: 'Bookmarks'
  },
  {
    id: 5,
    icon: <HelpOutline className="sidebar-wrapper_list-icon" />,
    title: 'Questions'
  },
  {
    id: 6,
    icon: <WorkOutline className="sidebar-wrapper_list-icon" />,
    title: 'Jobs'
  },
  {
    id: 7,
    icon: <Event className="sidebar-wrapper_list-icon" />,
    title: 'Events'
  },
  {
    id: 8,
    icon: <School className="sidebar-wrapper_list-icon" />,
    title: 'Courses'
  },
]


const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-wrapper_list">
          {
            sidebarSubmenu.map(item => (
              <li key={item.id}>
                {item.icon}
                <span className="sidebar-wrapper_list-item">{item.title}</span>
              </li>
            ))
          }
          {/* <li>
            <RssFeed className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Feed</span>
          </li>
          <li>
            <PlayCircleFilledOutlined className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Videos</span>
          </li>
          <li>
            <Group className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Groups</span>
          </li>
          <li>
            <Bookmark className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Bookmarks</span>
          </li>
          <li>
            <HelpOutline className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Questions</span>
          </li>
          <li>
            <WorkOutline className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Jobs</span>
          </li>
          <li>
            <Event className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Events</span>
          </li>
          <li>
            <School className="sidebar-wrapper_list-icon"/>
            <span className="sidebar-wrapper_list-item">Courses</span>
          </li> */}
        </ul>
        <button className="sidebar-wrapper_button">Show more</button>
        {/* hr maybe */}
        <ul className="sidebar-wrapper_friendsList">
          {
            Users.map(friend => (
              <Friend key={friend.id} friend={friend} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;