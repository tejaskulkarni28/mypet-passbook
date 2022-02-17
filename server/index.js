// Assining all the required modules.
const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql');
const e = require('express');
app.use(cors())
app.use(express.json())

// Connecting to mysql database.
const db = mysql.createConnection(
    {
        user:"root",
        database:"pet_schema",
        password:"password",
        host:"localhost",
        dateStrings:"true"
    }
)


// Handling post route
app.post('/add', (req, res)=>{
    const vaccine_name = req.body.vaccine_name;
    const date = req.body.date;
    const dueDate = req.body.dueDate;

    console.log("Data from server: ", vaccine_name + " " + date + " " + dueDate)
    db.query('INSERT INTO pet_details(vaccine_name, date, dueDate) VALUES (?,?,?)',
    [vaccine_name, date, dueDate],
    (err, response)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(response)
        }
    }

    )
})


// Handling get route
app.get('/get', (req, res)=>{
    db.query('SELECT * FROM pet_details',
    (err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    }
    )
})

// handling post route
app.post('/checkPassword', (req, res)=>{
    const password = req.body.password;
    const setPassword = 'qazwsx';

    var True = new Boolean(true);
    var False = new Boolean(false);

    if(password === setPassword){
        res.send(True)
    }
    else{
        res.send(False)
    }
})

app.post('/update', (req, res)=>{
    const id = req.body.id;
    const updateVaccineName = req.body.updateVaccineName;
    const updateDate = req.body.updateDate;
    const updateDueDate = req.body.updateDueDate;


    db.query('UPDATE pet_details SET vaccine_name = ?, date = ?, dueDate = ? WHERE id = ? ',
    [
        updateVaccineName,
        updateDate,
        updateDueDate,
        id
    ],
    (err, response)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(response)
        }
    })
})

app.get('/getPreviousRecord', (req, res)=>{
    db.query('SELECT * FROM pet_details',
    (err, response)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(response)
        }
    })
})

app.post('/deleteRecord', (req, res)=>{
    const id = req.body.id;
    db.query('DELETE FROM pet_details WHERE id = ?',[id])
})

app.post('/sendFeedBack',(req, res)=>{
    const name = req.body.name;
    const feedback = req.body.feedback;

    db.query('INSERT INTO feedback (name, feedback) VALUES (?, ?)',
    [
        name,
        feedback
    ])
})

// Listining on port 3001!
app.listen(
    3001,
    ()=>{
        console.log("Huh! Server Started on Port 3001")
    }
)
