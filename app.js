const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const bodyparser = require('body-parser');
const user = [];

app.use(bodyparser.urlencoded ({extended:false}));

app.use(bodyparser());

app.get('/', (req,res) => {
    // fs.readFileSync('/first.html', (err,) => {
        res.sendFile(path.join(__dirname + '/first.html')) 
 
});


app.post('/login', (req,res,next) => {
    if(typeof (req.body.username || req.body.email || req.body.pass !== undefined) && req.body.pass === req.body.cnfrmpass) {
        let userdetail = [(req.body.username), (req.body.email), (req.body.pass)];
        fs.appendFile('userDetails.json', userdetail, (err) => {
            if(err) {
                console.log('err');

            } 
            res.send('Login successfully')
            // res.redirect('/login', {
            //     msg: 'Added Successfully',
            //     file: req.body
            // });
            console.log('Details added successfully');
            console.log(userdetail);
        })
        
        
        
    } else {
        res.redirect('/', {
            msg: 'Password are not matching'
        });
    }
});

app.post('/login', (req,res) => {
    console.log(req.body.username)
    console.log(req.body.pass)
    console.log(req.body)

    // if(req.body.pass === 'Sukhpal' && req.body.pass === '12345678') {
    //     res.send('Welcome ' + req.body.username + '!');

        if(req.body.pass === req.body.cnfrmpass ) {
            // res.send('Welcome ' + req.body.username + '!');
            res.send('Password Matched')
            console.log('Passed matched');

    } else {
        res.send("Password doesn't Match");
        // res.send('Invalid credentials');
    }

});

// function formvalid() {

//     var username = document.getElementById('name').value;
//     var mail = document.getElementById('mail').value;
//     var password = document.getElementById('passwd').value;
//     var cnfrmpass = document.getElementById('cnpasswd').value;

//     if(username == "") {
//         document.getElementById('username').innerHTML = " Please enter the Name";
//         return false;
//     }

    
//     if(mail == "") {
//         document.getElementById('username').innerHTML = " Please enter the Email id";
//         return false;
//     }

//     if(password == "") {
//         document.getElementById('username').innerHTML = " Please enter the Password";
//         return false;
//     }

//     if(cnfrmpass == "") {
//         document.getElementById('username').innerHTML = " Please enter the Confirm passwoed";
//         return false;
//     }
    


// }


app.listen(8000);