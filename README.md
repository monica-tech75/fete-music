# Distribution des taches

todo list
1. NavBar (logo barnav lien)
2. Header (h1- p-bgimg)
3. 2 * Article (h2-img-p)
3.5 
4. Footer (liens)

HAMBURGER.JSX
<style jsx>{`
.hamburger{
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
}

.burger{
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3s linear;
}
`}</style> 

NAV.JSX

.hamburger {
    display: none;
    z-index: 6;
}


@media (max-width: 767px) {

    .hamburger {
        display: fixed;
        padding-top: 10px;
        margin-left: 10px;
        z-index: 6;
    }
}