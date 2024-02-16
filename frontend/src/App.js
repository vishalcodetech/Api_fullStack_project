import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
function App() {
   const [employee ,setEmployees] = useState([])

   useEffect(()=>{
    async function getAllemployee(){
      try{
        const employees = await axios.get("http://127.0.0.1:8000/api/employee/")
        console.log(employees.data)
        setEmployees(employees.data)
      }catch(error){
        console.log(error)
        
      }
    }
    getAllemployee()
   },[])
  return (
    <div className="App">
      <h1>Backend to frontend</h1>
      {
        employee.map((employees,i)=>{
          return(
            <h2 key={i}>{employees.employeeName} {employees.email} </h2>
          )
        })
      }
       
    </div>
  );
}

export default App;
