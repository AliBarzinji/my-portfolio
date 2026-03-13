function Skills(){

const skills=[
{name:"HTML",level:"90%"},
{name:"CSS",level:"85%"},
{name:"Bootstrap",level:"80%"},
{name:"JavaScript",level:"75%"},
{name:"React",level:"70%"}
]

return(

<section id="skills" className="container mt-5">

<h2>Skills</h2>

{skills.map(skill=>(

<div className="mb-3">

<p>{skill.name}</p>

<div className="progress">

<div
className="progress-bar"
style={{width:skill.level}}
>

{skill.level}

</div>

</div>

</div>

))}

</section>

)

}

export default Skills