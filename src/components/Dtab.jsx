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
import TrB from './TrB'
  export default function Dtab(){
 
    return(
        <TableContainer>
        <Table variant='simple'>
          
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Dob</Th>
              <Th>Department</Th>
              <Th>FatherName</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
            </Tr>
          </Thead>
         <Tbody>
          <TrB/>
          </Tbody>
        </Table>
      </TableContainer>
    )
  }