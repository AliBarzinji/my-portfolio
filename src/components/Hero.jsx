import { useState, useEffect } from "react"

function Hero(){

const text="Cybersecurity Analyst | Frontend Developer | Bug Hunter | CTF Player"
const [display,setDisplay]=useState("")

useEffect(()=>{

let i=0

const typing=setInterval(()=>{

setDisplay(text.slice(0,i))
i++

if(i>text.length){
clearInterval(typing)
}

},70)

},[])

return(

<section className="bg-dark text-success p-5 text-center">

<div className="container">

<h1 className="text-light">Ali Amin Haider</h1>

<div className="terminal-box">

<p>$ whoami</p>

<p>{display}</p>

</div>

</div>

</section>

)

}

export default Hero