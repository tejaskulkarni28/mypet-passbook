import React, { useState} from "react";
import { useNavigate} from "react-router";


import '../../Styles/admin.css'

import Nav from "../Home/NavigationBar/NavigationBar"
import Footer from "../Home/Footer/Footer"
import Axios from 'axios'
import AdminPage from "./AdminPage";

const Admin = ()=>{
    // <Routes>
    //     <Route path="/admin/page" element={<AdminPage/>}/>
    // </Routes>

    let navigate = useNavigate();
    const[password, setPassword] = useState('');

    function checkPasswordFunction(){
        
            Axios.post('http://localhost:3001/checkPassword',
            {
                password:password
            }).then((response)=>{
                setPassword(response.data)
    
                const getResponse = response.data;
    
                if(getResponse){
                    function approved(){
                        navigate('/approved')
                    }
                    approved();
    
                }
    
                else{
                    alert("Entered ID is Incorrect!")
                }
            })
    } 

    return(
        <div>
            <Nav />
            <div className="outer-container">
                <div className="inner-container">
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Admin ID" /><br/>
                    <button onClick={checkPasswordFunction}>Submit</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Admin;