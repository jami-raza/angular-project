const express = require("express");
const mongoose = require("mongoose");
const LeadSchema = require("./models");
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
require('dotenv').config({path: __dirname + '/.env'})
// mongoose.connect(process.env.MONGO_URI,
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser:true,
//   }
// );

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser:true,
            // useCreateIndex:true
        })

        console.log('Monggose Connected:',conn.connection.host)
    } catch(error) {
        console.error('Error:' ,error.message)
        process.exit(1)
    }
}

app.post("/leads", async (request, response) => {
    await connect();
    const lead = new LeadSchema(request.body);
  
    try {
      await lead.save();
      response.send(lead);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/leads", async (request, response) => {
    const leads = await LeadSchema.find({});
  
    try {
      response.send(leads);
    } catch (error) {
      response.status(500).send(error);
    }
  });


app.listen(3000, () => {
    console.log("Server is running at port 3000");
  });
