require('dotenv').config()

const express = require('express')
const app = express()

const agentRoutes = require('./api/agentRoutes')

app.use(express.json())

app.use('/api/agent', agentRoutes)

app.get('/', (req,res)=>{
    res.send("Clawor Secure Agent Server Running")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Clawor Server running on port", PORT)
})
