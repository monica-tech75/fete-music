// import { useState } from "react";
import Hamburger from "./Hamburger"
import Menuclassic from "./Menuclassic";
import "../styles/navbar.css";

export default function Navbar() {


    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 768;
    console.log(isMobile)
    console.log(window.innerWidth)

    return (
        <div className='navbar'>
            <img src="https://storage.googleapis.com/is-wp-46-prod/uploads-prod/2024/06/5c9c957d-bulle-site-internet-test-2.png" alt="logo fête de la musique" className='logo' />

            {isMobile ? <Hamburger /> : <Menuclassic />}

        </div>
        // en mobile je veux voir le burger et en desktop le burger disparait et montre les listes stylisées (home, contact, login)

        //     <div onClick={toggleHamburger} className="hamburger">
        //          {isMobile ? <Hamburger /> : <Menuclassic />}
        //     </div>
        // 

    )
}


/*const menuItems= [home, contact,login]
windowWidth
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const isMobile = windowWidth < 768;
isMobile ? <MenuHamburger /> : <MenuClassique />

window.innerwidth < 768 ? <MenuHamburger /> : <MenuClassique />*/

    // const [hamburgerOpen, setHamburgerOpen] = useState(false);
    // const toggleHamburger = () => {
    //     setHamburgerOpen(!hamburgerOpen)
    // }
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // function handleWindow (){
    //     (setWindowWidth(!isMobile))
    // }
