const { rejects } = require('assert');
const express = require('express');
// db stuff 1st
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;
// const port1 = process.env.PORT || 90;


//db stuff 2
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/Newdance');

}

// async function main() {
//   await mongoose.connect('mongodb://localhost/Grace');

// }

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));

});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, 'contact.html'));

});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'about.html'));

});
app.get('/services', function(req, res) {
  res.sendFile(path.join(__dirname, 'services.html'));

});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));

});
app.get('/payment', function(req, res) {
  res.sendFile(path.join(__dirname, 'mock-payment.html'));

});



//defining schema for db

const contactSchema = new mongoose.Schema({
    name: String,
    Email: String,
    textarea: String,


    // Number: String,
    // Addres:String
  });
  
const contactSchema1 = new mongoose.Schema({
  Username: String,
  password: String,
  email: String,
  
  
});


  // creating a model
  
const contact = mongoose.model('ContactD', contactSchema);

const contact11 = mongoose.model('graced', contactSchema1);

//for serving static files

app.use('/static',express.static('static'))  
app.use(express.urlencoded())  


//db stuff 3rd

app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
    res.send("Thank you for registering we'll ")
    
    }).catch(()=>{
    res.status(404).send("item was not saved to the databse")
})
})


app.post('/login', (req, res)=>{
    var myData1 = new contact11(req.body);
    myData1.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(404).send("item was not saved to the databse")
})
})

app.listen(port);
console.log('Server started at http://localhost:' + port);



// window.onload = function() {
//   // Show the modal after 30 seconds
//   setTimeout(function() {
//       document.getElementById('registrationModal').style.display = 'block';
//   }, 5000); // 30000 milliseconds = 30 seconds
// };