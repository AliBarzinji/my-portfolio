function toggleTheme(){

document.body.classList.toggle("light-mode")

}

function Navbar(){
return(

<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
<div className="container">
<button
className="btn btn-outline-light ms-3"
onClick={toggleTheme}
>
Toggle Theme
</button>

<a className="navbar-brand">Ali Amin Haider</a>

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<a className="nav-link" href="#about">About</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#skills">Skills</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#projects">Projects</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#contact">Contact</a>
</li>

</ul>

</div>
</nav>

)
}

export default Navbar