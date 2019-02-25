const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const confirmpassword = document.getElementById('cnfrmpwd');
let submitbutton = document.getElementById('submit');
const userid = document.getElementById('uid');

var users = [];

var elements = document.getElementsByTagName("input");

for (i in elements) {
   
    if (document.getElementById(elements[i].id) != null) {
        document.getElementById(elements[i].id).addEventListener('keyup', function (event) {
            if (validateForm()) {
                
                submitbutton.disabled = false;
            } else {
                submitbutton.disabled = true;
            }
        });
    }
}


// app.post('/login', (req,res,next) => {    if(typeof (req.body.username || req.body.email || req.body.pass !== undefined) && req.body.pass === req.body.cnfrmpass) 
//     {
//         let userdetail = [(req.body.username), (req.body.email), (req.body.pass)];        
//         fs.appendFile('userDetails.json', userdetail, (err) => {           
//            if(err) {                
//                console.log('err');        
//              }            
//              res.send('Login successfully')  
            // res.redirect('/login', {  
                                       
  //     msg: 'Added Successfully',  
       //     file: req.body    
            // });  
                                                     
        // console.log('Details added successfully');
        // console.log(userdetail);        
        //     })
        //       } 
        //  else {
        //  res.redirect('/', {           
        //   msg: 'Password are not matching'       
        //  });   
        //      }});


function validateForm() {
    if (username.value == "" || email.value == "" || password.value == "") {
        return false;
        }
    if(password.value.length<6){
              return false;
    }
    if (password.value != confirmpassword.value) {
         return false;
    }
     return true;
}

function addUser() {

    if (validateForm()) {
        
        if (userid.value == '') {
            var user = {
               "id": Date.now(),
                "name": username.value,
                "email": email.value,
                "pwd": password.value,
            };
            users.push(user);
        } else {

            var user = {
                
                "name": username.value,
                "email": email.value,
                "pwd": password.value,
            };

            var i = 0;
            for (; i < users.length; i++) {
                if (users[i].id == userid.value) {
                    break;
                }
            }
            users[i] = user;
            userid.value = '';
        }

        // document.getElementById("user-form").style.display = "none";
        document.getElementById("user-added").style.display = "block";
        document.getElementById("myForm").reset();
    } else {
        alert("Form validation failed");
    }

    return false;
}


// function editUser(id) {
//     var user;
//     for (var i = 0; i < users.length; i++) {
//         if (users[i].id == id) {
//             user = users[i];
//             break;
//         }
//     }
//     console.log(user); 


function showAddUser() {
    document.getElementById("myForm").reset();
    document.getElementById("user-added").style.display = "none";
    document.getElementById("users").style.display = "none";
    submitBtn.disabled = true;
   
    document.getElementById("user-form").style.display = "block";
}

function showUsers() {
    document.getElementById("user-form").style.display = "none";
    document.getElementById("user-added").style.display = "none";

    var table = document.createElement('table');

    var tr = document.createElement('tr');
    var td1 = document.createElement('th');
    var td2 = document.createElement('th');
    var td3 = document.createElement('th');
    var td4 = document.createElement('th');
    var td5 = document.createElement('th');
    var td6 = document.createElement('th');
    var text1 = document.createTextNode("ID");
    var text2 = document.createTextNode("Name");
    var text3 = document.createTextNode("Email");
    var text4 = document.createTextNode("Password");
    var text5 = document.createTextNode("Edit");
    var text6 = document.createTextNode("Delete");
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    td6.appendChild(text6);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);

    
    for (var i = 0; i < users.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var text1 = document.createTextNode(users[i].id);
        var text2 = document.createTextNode(users[i].username);
        var text3 = document.createTextNode(users[i].email);
        var text4 = document.createTextNode(users[i].password);
        var text5 = document.createElement("button");
        text5.setAttribute( "onclick","btn btn-primary" ,"editUser(" + users[i].id + ")");
        text5.appendChild(document.createTextNode("Edit"));
        var text6 = document.createElement("button");
        text6.setAttribute("onclick", "deleteUser(" + users[i].id + ")");
        text6.appendChild(document.createTextNode("Delete"));
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        table.appendChild(tr);
    }
    document.getElementById("users").innerHTML = '';
    document.getElementById("users").appendChild(table);
    document.getElementById("users").style.display = "block";
}

function editUser(id) {
    var user;
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            user = users[i];
            break;
        }
    }
    console.log(user); 
    
    const a=user.password;
    username.value = user.username;
    email.value = user.email;
    password.value = user.password;;
    userid.value = user.id;
    document.getElementById("user-added").style.display = "none";user.password;
    document.getElementById("users").style.display = "none";
    document.getElementById("user-form").style.display = "block";
}
function deleteUser(id) {

        var i = 0;
        for (; i < users.length; i++) {
            if (users[i].id == id) {
                break;
            }
        }
        console.log("index:" + i);
        users.splice(i, 1);
        showUsers();
    }