import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../firebase';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);

  // query the db, first into posts, then post buy ID, then comments collection associated with post.ID
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');

    // Add comment to the backend

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

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
      {session && (
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <HeartIcon className="button" />
            <ChatIcon className="button" />
            <PaperAirplaneIcon className="button" />
          </div>
          <BookmarkIcon className="button" />
        </div>
      )}
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
