const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 5000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
  
  res.sendFile(path.join(__dirname , "/public/index.html"));
  });
app.get('/services', (req, res) =>{

  res.sendFile(path.join(__dirname , "/public/services.html"));
  });
  
  app.get('/contacts', function(req, res) {
    res.sendFile(path.join(__dirname , "/public/contact.html"));
    });
    
    app.get('/admin', function(req, res) {
      res.sendFile(path.join(__dirname , "/public/admin.html"));
      });
app.post('/contacts', function(req, res) {
    Name = req.body.Name
    email = req.body.email
    subject = req.body.subject
    message = req.body.message
    
    let outputdetailformet = `
                                 
 Name      : ${Name}
 Phone no. : ${number} 
 Email id  : ${email} 
                            
 Message   : ${message}


`

  fs.writeFileSync( Name +'_details.txt' , outputdetailformet );


  res.sendFile(path.join(__dirname, '/views/submit.html'));
   
  });


app.listen(port, ()=>{
    console.log(`your app is now on --------- http://localhost
  `)
})




