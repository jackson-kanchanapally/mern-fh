import {useEffect,useState} from 'react'
import CF from '../components/CF'
import Comp from '../components/Comp'

export default function Home(){
const [dat,setDat]=useState(null)
useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/work')
        const json = await res.json()

        if (res.ok) {
          setDat(json)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])
return(
<div>
    {dat&&dat.map((i)=>(
        <Comp key={i.id} cont={i.name} cp={i.email}/>
    ))}
    <CF/>
    </div>
) 
}