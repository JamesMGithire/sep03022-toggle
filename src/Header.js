import logo from './logo.svg';
export default function Header(props) {
  const { toggle, handleToggle, newStyle } = props
  return (
    <div
      className='dark width600 display-flex  height200 align-center justify-sb paddinglr20 borderbtRed'
      style={newStyle}
    >
      <div
        className="display-flex  height100 align-center"
      >
        <img src={logo} className="App-logo width50 animation-1s" alt="logo" />
        <h3 className='bright-blue'>
          <strong>ReactFacts</strong></h3>
      </div>
      <p className='margin0 margin-left0 position-relative justify-right'><small>Light
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={toggle}
          />
          <span className="slider round"></span>
        </label>
        Dark
      </small></p>
    </div>
  )
}