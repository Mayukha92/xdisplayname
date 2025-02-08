
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  //const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlefirstName = (e) =>{
    setFirstName(e.target.value);
  }
  const handlelastName = (e) => {
    setLastName(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(firstName && lastName){
      // setFullName(firstName +" " +lastName);
      setIsSubmitted(true);
      
    }else{
      alert('Please fill out both first name and last name')
    }
    // setFirstName('');
    // setLastName('');
    // setIsSubmitted(false);
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor = "firstName">First Name:</label>
          <input type ="text" id ="firstName" name ="firstName" value = {firstName} onChange={handlefirstName} required/>
        </div>
        <div>
          <label htmlFor = "lastName">Last Name:</label>
          <input type ="text" id ="lastName" name ="lastName" value = {lastName} onChange={handlelastName}  required/>
        </div>
        
        <button type='submit'>Submit</button>
   
      </form>
      {firstName&&lastName&&isSubmitted && (<p>Full Name: {firstName} {lastName}</p>)}
    </div>
  );
}

export default App;
