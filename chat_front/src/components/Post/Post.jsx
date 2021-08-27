import { useState } from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../testData';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-wrapper_top">
          <div className="post-wrapper_top-left">
            <img 
              className="post-wrapper_top-left_img"
              src={Users.find(user => user.id === post.userId).profilePicture}
              alt=""
            />
            <span className="post-wrapper_top-left_name">
              {Users.find(user => user.id === post.userId).username}
            </span>
            <span className="post-wrapper_top-left_date">
              {post.date}
            </span>
          </div>
          <div className="post-wrapper_top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-wrapper_center">
          <span className="post-wrapper_center-text">{post?.desc}</span>
          <img className="post-wrapper_center-img" src={post.photo} alt="" />
        </div>
        <div className="post-wrapper_bottom">
          <div className="post-wrapper_bottom-left">
            <img
              onClick={handleClickLike}
              className="post-wrapper_bottom-left_icon-like"
              src="/assets/like.png"
              alt=""
            />
            <img
              onClick={handleClickLike}
              className="post-wrapper_bottom-left_icon-heart"
              src="/assets/heart.png"
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