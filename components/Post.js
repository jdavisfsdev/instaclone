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
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="User Image"
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
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
