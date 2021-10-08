import React from 'react';
import Frame from './components/frame';
import TodoList from './TodoList';
import './App.css';

// function App(): JSX.Element {
//   return (
//     <div className="App">
//       <Frame>
//         <TodoList />
//       </Frame>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.tsx</code> and save to reload.
//     //     </p>
//     //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Frame>
        <TodoList />
      </Frame>
    </div>
  );
};

export default App;
