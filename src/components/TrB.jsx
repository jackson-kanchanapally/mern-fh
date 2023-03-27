import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  export default function TrB(){
    const [dat,setDat]=React.useState(null)
    React.useEffect(() => {
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
    return (
      <div>
      {dat&&dat.map((i)=>(
          
          <Tr>
            <Td>{i.firstName} {i.lastName}</Td>
            <Td>{i.email}</Td>
            
            <Td>{i.dob.slice(0,10)}</Td>
            <Td>{i.branch}</Td>
            <Td>{i.city}</Td>
            <Td>{i.fatherName}</Td>
            <Td>{i.hobbies}</Td>
          </Tr>
         
        
        ))
      }
     </div>
    )
}