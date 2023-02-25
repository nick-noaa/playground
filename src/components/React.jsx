import { useState } from 'react';

function React() {
  const [name, setName] = useState('Team');

  return <div>Hello {name} This is a React Component!</div>;
}

export default React;
