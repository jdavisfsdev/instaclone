import faker from 'faker';
import { useEffect } from 'react';

function Stories() {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      //   contextualCard creates fake data including name, avatar, address etc...
      ...faker.helpers.contextualCard(),
      id: i,
    }));
  }, []);
  return (
    <div>
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}

export default Stories;
