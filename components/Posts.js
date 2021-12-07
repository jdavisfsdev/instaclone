import { useSession } from 'next-auth/react';
import Post from './Post';

const DUMMY_DATA = [
  {
    id: '123',
    username: 'jdpdx1',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Fake caption here',
  },
  {
    id: '123',
    username: 'jdpdx1',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Fake caption here',
  },
  {
    id: '123',
    username: 'jdpdx1',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Fake caption here',
  },
];

function Posts() {
  const { data: session } = useSession();
  return (
    <div>
      {DUMMY_DATA.map((item) => (
        <Post
          key={item.id}
          id={item.id}
          username={session?.user?.username}
          userImg={session?.user?.image}
          img={session?.user?.image}
          caption={item.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
