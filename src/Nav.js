import logo from './NavImage/logo.png';


export default function Nav(){
    return(
        <>
        <img src={logo} alt={"logo"}></img>
        <ul>
            <li><a href={"#"}>HOME</a></li>
            <li><a href={"#"}>ABOUT</a></li>
            <li><a href={"#"}>MENU</a></li>
            <li><a href={"#"}>RESERVATION</a></li>
            <li><a href={"#"}>ONLINE ORDER</a></li>
            <li><a href={"#"}>LOGIN</a></li>
        </ul>
        </>
    );
}