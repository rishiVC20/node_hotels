// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt','Hi '+user.username+'\n',()=>{
//     console.log('file is created');
// })

const express = require('express');
const app = express();
const db =  require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body





// app.get('/person',function(req,res){
//     res.send('Welcome to my hotel.....')
// })






// app.get('/chicken',(req,res)=>{
//     res.send('Sure sir, I would love to serve chicken');
// })
// app.get('/idli',(req,res)=>{
//     // res.send('Sure sir, Welcome to South Indian restaurant and I would love to serve idli');
//     var customised_idli={
//         name:'rava idli',
//         size:'10 cm diameter',
//         is_sambhar:true,
//         is_chutney:false,
//     }
//     res.send(customised_idli);
// })






//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);



app.listen(3000,()=>{
    console.log('Listening to port 3000')
});