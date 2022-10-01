const mongoose = require("mongoose");
const LeadSchema = new mongoose.Schema({
automation_name: {
type: String,
required: true,
},
project_name: {
type: String,
required: true,
},
});
const Lead = mongoose.model("Lead", LeadSchema);
module.exports = Lead;