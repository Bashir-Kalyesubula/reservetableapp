import footerlogo from "/Users/bashirbinbash/frontend/reservetableapp/src/images/Asset 9@4x.png"
function Footer () {
return (
     <>
<footer className="footer-container">
    <div className="image-container"><img className="footer-img" src={footerlogo} /></div>
    <div>
        <h2 className="footer-heading">Little Lemon</h2>
        <ul className="list-items">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Oder Online</li>
            <li>Login</li>
        </ul>
    </div>
    <div>
        <h2 className="footer-heading">Contact</h2>
        <ul className="list-items">
            <li>Adress</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
    </div>
    <div className="media-container">
        <h2 className="footer-heading">Social Media</h2>
        <ul className="list-items">
            <li>facebook icon</li>
            <li>instagram icon</li>
            <li>twitter icon</li>
            <li>tiktok icon</li>
        </ul>
    </div>
    </footer></>
    ) }

export default Footer;