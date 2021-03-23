import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <ul className='navbar__menus'>
        <li className='navbar__menus-item'>HOME</li>
        <li className='navbar__menus-item active'>FAVOURITE</li>
        <li className='navbar__menus-item'>NEWSLETTER</li>
      </ul>

      <div className='navbar__auth'>
        <div className='navbar__auth-avatar'></div>
        <div className='navbar__auth-name'>LOGIN</div>
      </div>

      {/* <div className='navbar__auth'>
                <div className='navbar__auth-login'>LOGIN</div>
            </div> */}
    </div>
  )
}

export default Navbar
