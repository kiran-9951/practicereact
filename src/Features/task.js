import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function App() {
  const [text, setText] = useState(0);

  const TextComponent = () => (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} autoFocus/>
    </>
  );

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        marginLeft: 50,
        marginTop: 20,
        
      }}
>
      <TextComponent />
    </div>
  );
}

export default App;