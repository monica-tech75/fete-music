import Hamburger from "./Hamburger.jsx";

function Navbar() {
    return (
        <div className='navbar'>
            <img src="https://storage.googleapis.com/is-wp-46-prod/uploads-prod/2024/06/5c9c957d-bulle-site-internet-test-2.png" alt="logo fête de la musique" className='logo' />
            <ul>
                <a href="#!">home</a>
                <a href="#!">contact</a>
                <a href="#!">login</a>
            </ul>
        </div>
    )
}
<style jsx>{`
    .navigation{
        width: 100%;
    height: 50px;
    background-color: blue;
   
}

    .navigation ul{
        display: flex;
    flex-wrap: wrap;
    float: right;
    margin: 20 0px;
    padding: 0 25px;
}

    .navigation ul li{
        padding: 10px;
        list-style-type: none;
    }
   
    .hamburger{
        display: none;
        z-index: 6;
    } 


    @media (max-width: 767px){
      
        .hamburger{
            display:fixed;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
        }

    
       
        .navigation ul{
            display: ${hamburgerOpen ? 'inline' : 'none'};
            background-color: blue;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
            

        }
    }
`}</style>

export default Navbar