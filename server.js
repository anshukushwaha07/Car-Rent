const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5001;
const dbConnection = require("./db");

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Node JS server started in port ${port}`));
