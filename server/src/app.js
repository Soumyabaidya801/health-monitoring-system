const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('../database/db');
const authRoutes = require('../routes/authRoutes');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);

//Check
app.get("/",(req,res)=>{
  res.send("backend is Running....");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT ,() => {
  console.log(`server is running on port ${PORT}`);
});