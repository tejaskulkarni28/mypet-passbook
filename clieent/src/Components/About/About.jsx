import React,{useState} from "react";
import Nav from "../Home/NavigationBar/NavigationBar";
import '../../Styles/about.css'
import Axios from "axios";
import Footer from "../Home/Footer/Footer";

const About = ()=>{
    const [name, setName] = useState('');
    const [feedback, setFeedBack] = useState('');

    function sendFeedBack(){
        Axios.post('http://localhost:3001/sendFeedBack',{
            name:name,
            feedback:feedback
        })
        alert("Thank You! :)")
    }

    return(
        <div>
            <Nav />
            <div className="container">
                <div className="content">
                    <h1>Feedback</h1>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name"/><br/>
                    <input type="text" onChange={(e)=>{setFeedBack(e.target.value)}} placeholder="Write your feedback or give any suggestions to imporve your experience. Thank You!" /><br/>
                    <button onClick={sendFeedBack}>SUBMIT</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;