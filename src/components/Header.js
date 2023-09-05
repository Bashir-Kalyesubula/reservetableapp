import logo1 from "/Users/bashirbinbash/frontend/reservetableapp/src/images/logo1.png"

function Header (){
return (
<header className="header-app">

<img className="logo-img" src={logo1} alt="logo" />
<nav className="main-nav">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Online-Order</li>
        <li>Reservations</li>
        <li>Login</li>
    </ul>
</nav>
</header>
) }

export default Header;