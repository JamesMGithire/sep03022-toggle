import './App.css';
import Header from './Header';
import Body from './Body';
import React from 'react'

function App() {
  const [toggle, setToggle] = React.useState(false);
  function handleChange() {
    setToggle(!toggle)
  }
  const lightModeStyle = {
    "backgroundColor": "rgb(235, 235, 235)",
    "color": "black"
  }
  const styleChange = toggle ? {} : lightModeStyle;
  return (
    <div
      className="App overflow-hidden"
    >
      <header className="App-header">
        <Header
          toggle={toggle}
          handleToggle={handleChange}
          newStyle={styleChange}
        />
        <Body
          newStyle={styleChange}
        />
      </header>
    </div>
  );
}

export default App;
