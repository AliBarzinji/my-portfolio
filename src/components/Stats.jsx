function Stats(){

const stats=[
{title:"CTF Challenges",value:"120+"},
{title:"Security Labs",value:"35+"},
{title:"Bug Bounty Tests",value:"50+"},
{title:"Projects Built",value:"15+"}
]

return(

<section className="container text-center mt-5">

<h2>Experience</h2>

<div className="row">

{stats.map(stat=>(

<div className="col-md-3">

<h3 className="text-success">{stat.value}</h3>

<p>{stat.title}</p>

</div>

))}

</div>

</section>

)

}

export default Stats