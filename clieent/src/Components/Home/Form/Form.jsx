import React, { useState , useEffect} from "react";
import Axios from 'axios';

const Form = ()=>{
    // useState to get pure raw data from client page ..
    const [vaccine_name, setVaccineName] = useState('');
    const [date, setDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    const addVaccineDetails = ()=>{
        Axios.post('http://localhost:3001/add', {
            vaccine_name:vaccine_name,
            date:date,
            dueDate:dueDate
        })
    }

    const [getDetails, setDetails] = useState([]);
    function GetVaccineDetails (){
        useEffect(()=>{
           setDetails(getDetails);
            Axios.get('http://localhost:3001/get').then((response)=>{
                setDetails(response.data)
                console.log(response.data)
            })
        },[])
    }
    GetVaccineDetails();
    
    return(
        <div className="form-container">
        <form>
            <div className="form-input-container">
                <ul>
                    <li><input type="text" placeholder="Vaccine name" onChange={(e)=>{setVaccineName(e.target.value)}} required/></li>
                    <li><input type="date" className="date" onChange={(e)=>{setDate(e.target.value)}} required/></li>
                    <li><input type="date" className="date" onChange={(e)=>{setDueDate(e.target.value)}} required/></li>
                    <li><button onClick={addVaccineDetails}>Submit</button></li>
                    {/* <li><button onClick={getVaccineDetails}>Show List</button></li> */}
                </ul>
            </div>
            </form>
            <div className="form-out-container">
                 <table>
                    <thead>
                        <th>Vaccine name</th>
                        <th>Date</th>
                        <th>Due Date</th>
                    </thead>
                {getDetails.map((value)=>{
                    return <tbody>
                        <tr>
                            <td>{value.vaccine_name}</td>
                            <td>{value.date}</td>
                            <td>{value.dueDate}</td>
                        </tr>
                    </tbody>
                })}
                </table>
            </div>
        </div>
    )
}

export default Form;