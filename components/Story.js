import Image from 'next/image';

function Story({ img, username }) {
  return (
    <div>
      <img src={img} alt="" />
      <p>{username}</p>
    </div>
  );
}

export default Story;
