import logo from '../../assets/images/logo.jpg';
export const Header = () => {
    return (
        <div className="head">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}