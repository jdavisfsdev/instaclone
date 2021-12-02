import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}
      <div>
        <img src={userImg} alt="" />
        <p>{username}</p>
      </div>

      {/* img */}

      {/* buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
}

export default Post;
