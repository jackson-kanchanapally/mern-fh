import React from "react";
import { useState } from "react";
import {
Control,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Box,
  Button,
  Input
} from "@chakra-ui/react";

export default function CF() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [branch, setBranch] = useState("");
  const [city, setCity] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherMobileNumber, setFatherMobileNumber] = useState("");
  const [motherMobileNumber, setMotherMobileNumber] = useState("");
  const [fatherEmail, setFatherEmail] = useState("");
  const [motherEmail, setMotherEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [interestedGames, setInterestedGames] = useState("");
  const [err, setErr] = React.useState(null);
  const handleSubmit = async (e) => {
    const hobbyList = hobbies.split(",");
    const gameList = interestedGames.split(",");

    e.preventDefault();
    const details = {
      firstName,
      lastName,
      dob,
      branch,
      city,
      fatherName,
      motherName,
      fatherMobileNumber,
      motherMobileNumber,
      fatherEmail,
      motherEmail,
      hobbyList,
      interestedGames,
      email,
    };
    const res = await fetch("/api/work", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    if (!res.ok) {
      setErr(json.error);
    }
    if (res.ok) {
      setErr(null);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setBranch("");
      setCity("");
      setFatherName("");
      setMotherName("");
      setMotherMobileNumber("");
      setFatherMobileNumber("");
      setFatherEmail("");
      setMotherEmail("");
      setHobbies([]);
      setInterestedGames([]);
    }
  };
  return (
    // <form onSubmit={handleSubmit}>
    //     <h1>Name</h1>
    //     <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    //     <h1>email</h1>
    //     <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    //     <input type='submit' value='SUbmit'></input>
    //     {err&& <div>{err}</div>}
    // </form>
    <Box p="20">
      <form onSubmit={handleSubmit}>
        <FormLabel>First name</FormLabel>
        <input placeholder="First name"  value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        <FormLabel>Last name</FormLabel>
        <input placeholder="Last name"   value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        <FormLabel>Email address</FormLabel>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <FormLabel>Date of Birth</FormLabel>
    <input
          placeholder="Select Date and Time"
          size="md"
          type="date"
          value={dob}
          onChange={e=>{
            setDob(e.target.value)
          }}
        />
        <FormLabel>Branch</FormLabel>
        <select placeholder="Select Branch" value={branch} onChange={e=>{
            setBranch(e.target.value)
        }}>
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="ece">ECE</option>
        </select>
        <FormLabel>City</FormLabel>
        <input placeholder="City" value={city} onChange={e=>{
            setCity(e.target.value)
        }}></input>
        <FormLabel>Mother's name</FormLabel>
        <input placeholder="Mother Name" size="md" type="name" value={motherName}
          onChange={e=>{
            setMotherName(e.target.value)
          }}/>
        <FormLabel>Father's name</FormLabel>
        <input placeholder="Father Name" size="md" type="name" value={fatherName}
          onChange={e=>{
            setFatherName(e.target.value)
          }}/>
        <FormLabel>Father's Mobile Number</FormLabel>
        <input type="tel" value={fatherMobileNumber}
          onChange={e=>{
            setFatherMobileNumber(e.target.value)
          }}/>
        <FormLabel>Mother's Mobile Number</FormLabel>
        <input type="tel" placeholder="phone number" value={motherMobileNumber}
          onChange={e=>{
            setMotherMobileNumber(e.target.value)
          }}/>
        <FormLabel>Father's Email address</FormLabel>
        <input type="email" value={fatherEmail}
          onChange={e=>{
            setFatherEmail(e.target.value)
          }}/>
        <FormLabel>Mothers Email address</FormLabel>
        <input type="email" value={motherEmail}
          onChange={e=>{
            setMotherEmail(e.target.value)
          }}/>

        <FormLabel>Hobbies</FormLabel>
        <input placeholder="Hobbies" size="md" type="name" />
        <FormLabel>Intrested Games</FormLabel>
        <input placeholder="Intrested games" size="md" type="name" />
        <input type='submit' value='Submit' ></input>
      </form>
    </Box>
  );
}
