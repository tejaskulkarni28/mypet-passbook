import React from "react";
import '../../Styles/adminpage.css';
import Nav from '../Home/NavigationBar/NavigationBar';
import {useState} from "react";
import Axios from "axios";

// this page is used for admin page.jsx
// only admin access!

function AdminPage(){
    const [id, setId] = useState();

    const [updateVaccineName, setUpdateVaccineName] = useState('');
    const [updateDate, setUpdateDate] = useState('');
    const [updateDueDate, setUpdateDueDate] = useState('');

    const [getRec, setRec] = useState([]);

    const [deleteRec, setDeleteRec] = useState();

    function updateRecord(){
        console.log(id + " " + updateVaccineName + " " + updateDate + " " + updateDueDate)
        Axios.post('http://localhost:3001/update',
        {
            id:id,
            updateVaccineName:updateVaccineName,
            updateDate:updateDate,
            updateDueDate: updateDueDate
        })
    }

    async function getRecord(){
        Axios.get('http://localhost:3001/getPreviousRecord').then((response)=>{
            setRec(response.data)
        })
    }
    getRecord();

    function deleteRecord(){
        Axios.post('http://localhost:3001/deleteRecord',
        {
            id:deleteRec
        })
    }

    return(
        <div>
           <Nav/>
           <div className="form-container">
            <div className="form-input-container">
                <ul>
                    <li><h3>UPDATE</h3></li>
                    <li><input type="number" placeholder="Enter Id" onChange={(e)=>{setId(e.target.value)}} required/></li>
                    <li><input type="text" placeholder="Vaccine name" onChange={(e)=>{setUpdateVaccineName(e.target.value)}}/></li>
                    <li><input type="date" className="date" onChange={(e)=>{setUpdateDate(e.target.value)}}/></li>
                    <li><input type="date" className="date" onChange={(e)=>{setUpdateDueDate(e.target.value)}}/></li>
                    <li><button onClick={updateRecord}>Submit</button></li>
                    <ul>
                    <li><h3>DELETE</h3></li>
                    <li><input type="number" placeholder="Enter Id" onChange={(e)=>{setDeleteRec(e.target.value)}} required/></li>
                    <li><button onClick={deleteRecord}>Remove</button></li>
                </ul>
                </ul>
            </div>
            <div className="form-out-container">
            
            <table>
            <thead>
                <th>ID</th>
                    <th>Vaccine name</th>
                    <th>Date</th>
                    <th>Due Date</th>
            </thead>
                {getRec.map((value)=>{
                    return <tbody>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.vaccine_name}</td>
                            <td>{value.date}</td>
                            <td>{value.dueDate}</td>
                        </tr>
                    </tbody>
                })}
                </table>
            </div>
        </div> 
        </div>
    )
}

export default AdminPage;