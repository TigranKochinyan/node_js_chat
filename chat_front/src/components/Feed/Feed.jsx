import './feed.scss';
import Share from '../Share';
import Post from '../Post/';
import { Posts } from '../../testData';

const Feed = () => {
  console.log(Posts);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {
          Posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  )
};

export default Feed;
