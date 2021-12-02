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
  return (
    <div>
      {DUMMY_DATA.map((item) => (
        <Post
          key={item.id}
          id={item.id}
          username={item.username}
          userImg={item.userImg}
          img={item.img}
          caption={item.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
