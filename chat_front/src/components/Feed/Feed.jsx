import { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.scss';
import Share from '../Share';
import Post from '../Post/';
// import { Posts } from '../../testData';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    const fetchPosts = async () => {
      const res = await axios.get('post/timeline/61264b3a8b7a8729f0cfb3fe');
      // const posts = await res.json();
      console.log('posts', res.data);
      setPosts(res.data);
    }
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {
          posts.map((post) => (
            <Post key={post._id} post={post} />
          ))
        }
      </div>
    </div>
  )
};

export default Feed;
