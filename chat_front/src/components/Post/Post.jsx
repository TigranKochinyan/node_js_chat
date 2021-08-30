import { useState, useEffect } from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom'



const Post = ({ post }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  }
  const [user, setUser] = useState({});

  useEffect( () => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      // const User = await res.json();
      console.log('User', res.data);
      setUser(res.data);
    }
    fetchUser();
  }, [post.userId]);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-wrapper_top">
          <div className="post-wrapper_top-left">
            <Link to={`/profile/${user.username}`}>
              <img 
                className="post-wrapper_top-left_img"
                src={user.profilePicture || PF+'person/noAvatar.png'}
                alt=""
              />
            </Link>
            <span className="post-wrapper_top-left_name">
              {user.username}
            </span>
            <span className="post-wrapper_top-left_date">
              {format(post.createdAt)}
            </span>
          </div>
          <div className="post-wrapper_top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-wrapper_center">
          <span className="post-wrapper_center-text">{post?.desc}</span>
          <img className="post-wrapper_center-img" src={post.img.indexOf('http') !== -1 ? post.img : PF + post.img} alt="" />
        </div>
        <div className="post-wrapper_bottom">
          <div className="post-wrapper_bottom-left">
            <img
              onClick={handleClickLike}
              className="post-wrapper_bottom-left_icon-like"
              src={`${PF}like.png`}
              alt=""
            />
            <img
              onClick={handleClickLike}
              className="post-wrapper_bottom-left_icon-heart"
              src={`${PF}heart.png`}
              alt=""
            />
            <span className="post-wrapper_bottom-left_likes">
              {likes} people like it
            </span>
          </div>
          <div className="post-wrapper_bottom-right">
            <span className="post-wrapper_bottom-right_comments">
              {post.comments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;