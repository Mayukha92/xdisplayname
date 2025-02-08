
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('')

  const handlefirstName = (e) =>{
    setFirstName(e.target.value);
  }
  const handlelastName = (e) => {
    setLastName(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(firstName&& lastName){
      setFullName(firstName +" " +lastName);
    }else{
      alert('Please fill out both first name and last name')
    }
    
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor = "firstName">First Name: </label>
          <input type ="text" id ="firstName" value = {firstName} onChange={handlefirstName} required/>
        </div>
        <div>
          <label htmlFor = "lastName">Last Name: </label>
          <input type ="text" id ="lastName" value = {lastName} onChange={handlelastName}  required/>
        </div>
        
        <button type='submit'>submit</button>
        {fullName && (<h1>FullName : {fullName}</h1>)}
      </form>
    </div>
  );
}

export default App;
