const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://Amitgiri:VAzqvwVrJ3PDVljP@cluster0.gcuenx2.mongodb.net/?retryWrites=true&w=majority', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


