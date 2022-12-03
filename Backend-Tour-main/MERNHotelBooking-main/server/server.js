const express = require("express");
const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");
const toursRoute = require("./routes/tourRoute");
const tourbookingRoute = require("./routes/tourbookingRoute");
const stoursRoute = require("./routes/stourRoute");
const stourbookingRoute = require("./routes/stourbookingRoute");
const productsRoute = require("./routes/productRoute");

app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/tours", toursRoute);
app.use("/api/tourbookings", tourbookingRoute);
app.use("/api/stours", stoursRoute);
app.use("/api/stourbookings", stourbookingRoute);
app.use("/api/products", productsRoute);

const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node app listening on ${port} port!`));
