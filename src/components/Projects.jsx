import { useEffect, useState } from "react"

function Projects(){

const [repos,setRepos]=useState([])

useEffect(()=>{

fetch("https://api.github.com/users/AliBarzinji/repos")
.then(res=>res.json())
.then(data=>setRepos(data))

},[])

return(

<section className="container mt-5">

<h2>Projects</h2>

<div className="row">

{repos.slice(0,6).map(repo=>(

<div className="col-md-4">

<div className="card p-3 mb-3">

<h5>{repo.name}</h5>

<p>{repo.description}</p>

<a
href={repo.html_url}
target="_blank"
className="btn btn-dark"
>

View Code

</a>

</div>

</div>

))}

</div>

</section>

)

}

export default Projects