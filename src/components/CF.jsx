import React from 'react'
export default function CF(){
    const [name,setName]=React.useState('')
    const [email,setEmail]=React.useState('')
    const [err,setErr]=React.useState(null)
const handleSubmit=async(e)=>{
e.preventDefault()
const details={name,email}
const res=await fetch('/api/work',{
    method:'POST',
    body:JSON.stringify(details),
    headers:{
        'Content-Type':'application/json'
    }
})
const json=await res.json()
if(!res.ok)
{
    setErr(json.error)
}
if(res.ok)
{
    setErr(null)
    setName('')
    setEmail('')
}
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Name</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <h1>email</h1>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='submit' value='SUbmit'></input>
            {err&& <div>{err}</div>}
        </form>
    )
}