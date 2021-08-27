import './share.scss';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-wrapper_top">
          <img className="share-wrapper_top-img" src="/assets/person/1.jpeg" alt="" />
          <input 
            placeholder="What's in your mind Vardan?"
            className="share-wrapper_top-shareInput"
          />
        </div>
        <div className="share-wrapper_bottom">
          <div className="share-wrapper_bottom-options">
            <div className="share-wrapper_bottom-options_option">
              <PermMedia htmlColor="tomato" className="share-wrapper_bottom-options_option-icon" />
              <span className="share-wrapper_bottom-options_option-text">Photo</span>
              {/* Photo or Video */}
            </div>
            <div className="share-wrapper_bottom-options_option">
              <Label htmlColor="blue" className="share-wrapper_bottom-options_option-icon" />
              <span className="share-wrapper_bottom-options_option-text">Tag</span>
            </div>
            <div className="share-wrapper_bottom-options_option">
              <Room htmlColor="green" className="share-wrapper_bottom-options_option-icon" />
              <span className="share-wrapper_bottom-options_option-text">Location</span>
            </div>
            <div className="share-wrapper_bottom-options_option">
              <EmojiEmotions htmlColor="goldenrod" className="share-wrapper_bottom-options_option-icon" />
              <span className="share-wrapper_bottom-options_option-text">Feelings</span>
            </div>
          </div>
          <button className="share-wrapper_bottom-shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share;
