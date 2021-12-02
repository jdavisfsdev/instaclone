import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
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
      <img src={img} alt="User Post" className="object-cover w-full" />

      {/* buttons */}
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <HeartIcon className="button" />
          <ChatIcon className="button" />
          <PaperAirplaneIcon className="button" />
        </div>
        <BookmarkIcon className="button" />
      </div>
      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
}

export default Post;
