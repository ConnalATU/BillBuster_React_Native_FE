
// //server.js backend for application 
// //require connecting to DB from another file
// const { connect } = require('./dbConnection')

// //catch errors
// connect().catch(err => console.log(err))

// //use express
// const express = require('express')
// const app = express()
// const port = 4000

// //require tensorflow machine learning libary 
// const tf = require('@tensorflow/tfjs');


// //imported and installed body parser
// const bodyParser = require('body-parser'); 
// const cors = require('cors'); //installed cors 
// app.use(cors());
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });










// // //Adding mongoose to project
//  const mongoose = require('mongoose');

// //create new schema called energySchema 
// const energySchemaTest = new mongoose.Schema({
//     week: Number,
//     amount: Number,
//     company: String,
//     date: Date
// });

// const energyModelTest = mongoose.model('energy', energySchemaTest);

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())




// //search database for user input using regrex, req.query is assigned to key, uses a get request 
// // 
// app.get('/api/energys', async (req, res) => {

//     try{
//         const {key} = req.query
//         //creates an object 
//         // if $or(mongo db operator) condition is met it will return the data
//         // if not met it will return an empty array
//         const search = key ? {
//             "$or": [
//                 {company: {$regex: key, $options: "$i"}}
//             ]
//         } : {}
//         //searches database using mongoose .find
//         const data = await energyModelTest.find(search)
//         console.log(data)
//         //data output with json
//         res.json   
//             ({data})
//     }  catch(error) {
//         res.status(500).send(error);
//     }  

// })


// // displaying json with get
// app.get('/api/energy', (req, res) => {
  

//     //call back function to retrive data and log to the console
//     energyModelTest.find((error, data) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send(error);
//           } else {
//             res.json(data);
//           }
//         });
//     })

//     //searching data base fro book by id
//     app.get('/api/energy/:id', (req, res) => {
//         console.log(req.params.id);
//         energyModelTest.findById(req.params.id, (error, data) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).send(error);
//               } else {
//                 res.json(data);
//               }
//             });
//     })


// //getting information from the form using post method

// app.post('/api/energy/', async (req, res) => {
    

//     try {
//     //add new enties to the data model
//     const usage = new energyModelTest(req.body);
//     await usage.save();

//     //get data from db to be passed into tensorflow format
//     const electricityUsageData = await energyModelTest.find().exec();
//     console.log('Retrieved usage data from database:', electricityUsageData);


//     //converts varaibles into tensorflow format
//     const inputTensor = tf.tensor2d(electricityUsageData.map(d => [d.week]));
//     const labelTensor = tf.tensor2d(electricityUsageData.map(d => [d.amount]));

   

//         //normalize the data to the range 0 - 1 
//         const inputMax = inputTensor.max();
//         const inputMin = inputTensor.min();
//         const labelMax = labelTensor.max();
//         const labelMin = labelTensor.min();

//         const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
//         const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

//     console.log('Converted data into tensors');

// //linear regression model, adds model that data will be trained on
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 1, inputShape: [1]}));
// console.log('Compiled model');



// //compile the model using the sgd algorithm, using mean squared to calculate the loss within the data
// model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// //train the model on all data that has been entered into database, 50 epochs is the amount of times to cycle through the data
// // will output training on each epoc to the console for error checking, also show loss, higher loss will make bad predictions
// const history = await model.fit(normalizedInputs, normalizedLabels, {
//     epochs: 50,
//     batchsize: 32,
//     callbacks: {
//       onEpochEnd: (epoch, log) => {
//         console.log(`Epoch ${epoch}: loss = ${log.loss}`);
//       }
//     }
//   });
// console.log('Trained model');

// //after training is complete, mode will predict next weeks usage, passes to prediction variable that can be passed to front end

// const week = Number(req.body.amount);
// console.log(week);
// //tensorflow 2d array saved into var x
// let x = tf.tensor2d([week + 1],[1,1]);
// //passes x into model.predict(tensorflow method) and then assigned to var "modelOutput"
// //flatten turns it into a 1d array, arraySync turns it into a javascript array
// //returns first element in array as there is only 1
// const modelOutput =  model.predict(x).flatten().arraySync()[0];
// const prediction = modelOutput;


// console.log('Made prediction:', prediction);
// console.log('success');

// //sends predcition to front end and handles errors.
// res.send({ prediction });
//         console.log({ prediction });
//    } catch (error) {
//     res.status(500).send({error});
//   }
// });


// //creating put to update books updates and outputs to console 
// app.put('/api/energy/:id', (req, res) => {
//     console.log("update" + req.params.id);
//     energyModelTest.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
//       if (error) {
//             console.error(error);
//             res.status(500).send(error);
//           } else {
//             res.send(data);
//           }
//         });
// })

// //delete records from the database 
// app.delete('/api/energy/:id',(req, res) => {
//     console.log("Deleteing: "+req.params.id);
//     energyModelTest.deleteOne({_id:req.params.id}, (error, data)=>{
//         if (error) {
//             console.error(error);
//             res.status(500).send(error);
//           } else {
//             res.send(data);
//           }
//         });
// })


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })






const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const accountSid = "AC537c572080c1b66d725cad890b7b52d8";
const authToken = "936f3e90aa87dfcd2ac2c65ee3c241ab";
const client = twilio(accountSid, authToken);

app.post('/make-call', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;

  client.calls.create({
    twiml: `<Response><Say>${message}</Say></Response>`,
    to: phoneNumber,
    from: '+15674004390'
  })
  .then(call => {
    console.log(call.sid);
    res.status(200).json({ message: "Call initiated successfully!" });
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ message: "Call initiation failed." });
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});