import logo from './logo.svg';
export default function Body(props) {
  const { newStyle } = props
  return (
    <div
      className='height500 greydark width600 paddinglr20 text-left overflow-hidden zindex0'
      style={newStyle}
    >
      <h2 style={{ fontSize: "39px", letterSpacing: "-0.1rem" }}
        className='paddingt60'>
        Fun facts about React
      </h2>
      <ul
        className='list-style-none zindex1'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps</li>
      </ul>
      <img src={logo} className={"App-logo width1500 position-relative margin0 move-up opacity01 zindex-1"} alt="logo" />
    </div>
  )
}