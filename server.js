const mongoose = require("mongoose");

const app = require("./app");

const MONGO_URL =
  "mongodb+srv://mari4ka62:1234@cluster0.tdyitsv.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connection successful");

    app.listen(3000, () => {
      console.log("Server running. Use our API on port:", 3000);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
