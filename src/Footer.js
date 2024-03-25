import logo from "./NavImage/logo.png";

export default function Footer(){
    return(
        <>
        <img src={logo} alt={logo}></img>
        <ul>
            <h2>Doormat Navigation</h2>
            <li><a href={"#"}>Home</a></li>
            <li><a href={"#"}>About</a></li>
            <li><a href={"#"}>Menu</a></li>
            <li><a href={"#"}>Reservations</a></li>
            <li><a href={"#"}>order Online</a></li>
            <li><a href={"#"}>Login</a></li>
        </ul>
        <ul>
        <h2>Contact</h2>
            <li><a href={"#"}>Kathmandu, Nepal</a></li>
            <li><a href={"#"}>9808913969</a></li>
            <li><a href={"#"}>panditdiwas12@gmail.com</a></li>
        </ul>
        <ul>
            <h2>Social Media Links</h2>
            <li><a href={"#"}>Facebook</a></li>
            <li><a href={"#"}>Instagram</a></li>
            <li><a href={"#"}>Linkedin</a></li>
        </ul>

        </>
    );
}