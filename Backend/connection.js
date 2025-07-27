const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(process.env.mongodb_url
   )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
