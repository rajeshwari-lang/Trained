const mongoose=require("mongoose");

peopleSchema=new mongoose.Schema({
    firstname:String,
	lastname:String,
    address:String,
    email:String,
    phoneNo:String
},{
    collection:"People",
});
mongoose.model("People",peopleSchema)